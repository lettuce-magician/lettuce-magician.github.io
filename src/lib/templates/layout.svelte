<script>
    import "$lib/styles/about/index.css"
    /** @type {String}*/
    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<slot/>
