<script lang="ts">
    export let attr:string = "";
    export let path:string;
    export let href:string|null = null;
    export let onClick = () => {
        
    }
</script>

<a class="btn hover:scale-125 transform transition duration-500 cursor-pointer" target="_blank" on:click={onClick} {href}>
    <svg class="fill-white {attr} w-6 h-6"><path d={path}/></svg>
</a>