import enquirer from 'enquirer'
import { exec, ExecException, ChildProcess } from 'child_process'
import loading from 'loading-cli'
import util from 'util'
import { getRandomQuote } from 'randoquoter'

const prom_exec = util.promisify(exec)

function Loader_({
    color,
    frames = ["[-]", "[/]", "[|]", "[\\]"],
    interval = 75,
    stream = process.stdout,
    text = "placeholder",
    suicide = true
}: loading.Options & {
    suicide?:boolean
}) {
    const load = loading({
        color,
        frames,
        interval,
        stream,
        text
    })
    load.start()
    return {
        resolve: (text: string) => load.succeed(text),
        fail: (text: string) => {
            load.fail(text);
            if (suicide) process.exit(1);
        },
    }
}

function formatedExec(command: string, failCallback: (e: string) => any) {
    return new Promise<{
        error?: ExecException | null,
        stdout?: string,
        stderr?: string,
        e: ChildProcess
    }>((resolve) => {
        const e = exec(command, (error, stdout, stderr) => {
            if (e.exitCode != 0) failCallback(stderr)
            resolve({ error, stdout, stderr, e })
        })
    })
}

enquirer.prompt([
    {
        type: "text",
        name: "commit_name",
        message: "Qual o nome do commit?"
    }, {
        type: "confirm",
        name: "build",
        message: "Você deseja fazer build?"
    }, {
        type: "confirm",
        name: "deploy",
        message: "Você deseja fazer deploy?"
    }
]).then(async (response_) => {
    const response: {
        commit_name: string,
        build: boolean,
        deploy: boolean
    } = response_ as any

    if (response.build) {
        const { fail, resolve } = Loader_({
            text: "Building app",
        })
        
        await formatedExec("npm run build", fail)

        resolve("Builded app")
    }

    const { fail, resolve } = Loader_({
        text: "Adding files to remote repository",
    })

    await formatedExec("git add .", fail)
    await formatedExec(`git commit -m "${response.commit_name}"`, fail)
    await formatedExec('git push', fail)

    resolve("Added files")

    if (response.deploy) {
        const { fail, resolve } = Loader_({
            text: "Deploying to pages",
        })
        await formatedExec("npm run deploy", fail)
        resolve("Deployed to gh-pages")
    }

    let quote = getRandomQuote();
    console.log(`\n"${quote.text}"\n- ${quote.author}`)
})

export { }