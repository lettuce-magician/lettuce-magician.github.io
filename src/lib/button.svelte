<script lang="ts">
    export let href:string = "";
    export let custom:string = "";
</script>

<a {href} class="btn text-center rounded-md border-blue-500 border-2 px-5 py-7 {custom} bg-[rgb(15,15,15)] font-bold font-nunito hover:scale-110 transform transition duration-100 "
on:click on:mouseover on:mouseenter on:mouseleave on:focus>
    <slot/>
</a>


