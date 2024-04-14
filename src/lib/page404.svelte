<script>
    import {_,preload} from "$lib/translator"
    import Button from "$lib/button.svelte";
    import CoolBG from "$lib/coolbg.svelte";
</script>

<svelte:head>
<title>404</title>
</svelte:head>

<CoolBG/>

{#await preload() then}
<div
class="w-full h-full flex flex-col items-center align-center content-center justify-center text-white"
>
<div
    class="sticky top-0 flex flex-col items-center align-center content-center justify-center"
>
    <img class="w-[150px] h-[150px]" src="whar.png" alt="letiul, confused."/>
    <p class="text-2xl font-pixelify">{$_("error.message")}</p>
    <h1 class="text-blue-500 text-5xl font-pixelify font-bold">404</h1>
    <p class="text-2xl font-pixelify text-blue-500">{$_("error.text")}</p>
</div>
<!-- faz uma quebra de linha sem usar br -->
<div class="m-4"/>
<Button href="/" custom="py-[12px] px-5">{$_("error.back")}</Button>
</div>
{/await}