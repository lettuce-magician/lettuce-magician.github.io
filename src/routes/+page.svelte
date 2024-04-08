<script lang="ts">
    import {_,preload} from "$lib/translator"
    import Button from "$lib/button.svelte";
    import Social from "$lib/social.svelte";
    import CoolBG from "$lib/coolbg.svelte";
    import Locale from "$lib/locale.svelte";
    //import Modal from "$lib/modal.svelte";
    import { siRoblox, siDiscord, siSteam, siGithub } from "simple-icons";
    

</script>

<svelte:head>
    <title>Letiul's Wizard Tower</title>
    <meta property="og:title" content="Letiul's Wizard Tower" />
    <meta property="og:description" content="A place for my devblogs, portfolios and other interresting stuff."/>
</svelte:head>

{#await preload() then }
<CoolBG/>
<div
    class="w-full h-full flex flex-col items-center align-center content-center justify-center text-white shadow-xl"
>   
    <div class="grid grid-cols-2 content-center items-center gap-2">
        <Locale flag="br" lang="pt-br"/>
        <Locale flag="us" lang="en"/>
    </div>
    <div class="flex flex-col items-center align-center content-center justify-center">
        <p class="text-2xl font-pixelify">{$_("page.middleText.header")}</p>
        <h1 class="text-blue-500 text-5xl">レタス</h1>
        <p class="text-1xl font-pixelify text-blue-500">
            {$_("page.middleText.footer")}
        </p>
    </div>
    <div class="p-6"/>
    <div class="grid items-center grid-cols-2 grid-rows-2 gap-4">
        <Button>{$_("page.buttons.about")}</Button>
        <Button>{$_("page.buttons.port")}</Button>
        <Button>{$_("page.buttons.blog")}</Button>
        <Button>{$_("page.buttons.misc")}</Button>
    </div>
    <div class="p-3"/>

    <div class="grid items-center justify-center align-center flex-col grid-cols-4 gap-2">
        <Social
            href="https://www.roblox.com/users/466896302/profile"
            path={siRoblox.path}
        />
        <Social
            href="https://discord.com/users/703277400741380207"
            path={siDiscord.path}
        />
        <Social 
            href="https://github.com/lettuce-magician" 
            path={siGithub.path}
        />
        <Social
            href="https://steamcommunity.com/profiles/76561199054968454/"
            path={siSteam.path}
        />
    </div>
    <div class="p-2"/>
    <p class="text-[10px] font-nunito">{$_("page.wip")}</p>
</div>
{/await}