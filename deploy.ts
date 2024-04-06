import enquirer from 'enquirer'
import { execSync } from 'child_process'

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
    // maybe add pico colors to make terminal look color

    if (response.build) {
        console.log("[-] building app")
        // maybe add a loading indicator
        execSync("npm run build")
        console.log("[+] builded app")
    }

    console.log('[+] adding files')
    execSync("git add .")
    execSync(`git commit -m ${response.commit_name}`)
    execSync("git push -u origin main")

    if (response.deploy) {
        console.log('[+] deploying')
        execSync("npm run deploy")
    }

    console.log("[+] deploy successful!")
    console.log("did you know that 90% of people that quit gambling addiction, stop before they hit it big?")

})

export {}