import enquirer from 'enquirer'
import { exec } from 'child_process'
import loading from 'loading-cli'
import util from 'util'
import {getRandomQuote} from 'randoquoter'
import { fail } from '@sveltejs/kit'

const prom_exec = util.promisify(exec)

function Loader_({
    color,
    frames = ["[-]", "[/]", "[|]", "[\\]"],
    interval = 75,
    stream = process.stdout,
    text = "placeholder"
}: loading.Options)
{
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
        fail: (text: string) => load.fail(text),
    }
}

function handle_error(error: string, failCallback: (text: string) => any) {
    if (error.length > 0)  {
        failCallback(error)
        process.exit(1)
    }
    return
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
        const {fail,resolve} = Loader_({
            text:"Building app",
        })

        const { stderr } = await prom_exec("npm run build")
        
        if (stderr.length > 0) {
            fail("Failed building app: " + stderr)
            process.exit(1)
        }
        resolve("Builded app")
    }

    const {fail,resolve} = Loader_({
        text:"Adding files to remote repository",
    })

    const e = exec("git add .")
    await new Promise((a) => e.on("close",a))
    if (e.exitCode != 0) {
        handle_error(e.stderr?.read(), fail)
    }
    

    const {stderr:stderr2} = await prom_exec(`git commit -m "${response.commit_name}"`)
    handle_error(stderr2, fail)

    const {stderr:stderr3} = await prom_exec(`git commit -m "${response.commit_name}"`)
    handle_error(stderr3, fail)

    resolve("Added files")

    if (response.deploy) {
        const {fail,resolve} = Loader_({
            text:"Deploying to pages",
        })
        const {stderr} = await prom_exec("npm run deploy")
        handle_error(stderr, fail)
        resolve("Deployed to gh-pages")
    }
    
    let quote = getRandomQuote();
    console.log(`\n"${quote.text}"\n- ${quote.author}`)
})

export { }