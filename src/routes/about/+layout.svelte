<script lang="ts">
    import "../../app.css"
    import CoolBG from "$lib/coolbg.svelte";
    import Locale from "$lib/locale.svelte";
</script>
<CoolBG/>
<slot/>
<div class="fixed top-0 right-0 m-5 grid grid-cols-2 content-center items-center gap-2">
    <Locale flag="br" lang="pt-br"/>
    <Locale flag="us" lang="en"/>
</div>
