<script lang="ts">
    import {locale} from "$lib/data";
    import "/node_modules/flag-icons/css/flag-icons.min.css";

    export let lang = "en";
    export let flag = "us";
</script>

<button class="fi fi-{flag} hover:scale-125 transform transition duration-125 cursor-pointer" on:click={()=>locale.set(lang)}/>