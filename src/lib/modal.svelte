<script lang="ts">
    export let showModal: boolean;
    let dialog: HTMLDialogElement;
    let anims: string =
        "animate-fade-down animate-once animate-duration-[750ms] animate-ease-in-out animate-alternate animate-fill-both";
    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- n gostei dos anim de leave, vai ser assim memo-->
<dialog
    bind:this={dialog}
    on:close={() => {
        showModal = false;
        console.log("whenamechiuinthesama");
    }}
    class="backdrop:bg-[rgba(0,0,0,0.3)] rounded border-blue-500 border-2 p-0 relative bg-[rgb(40,40,40)] text-white animate-fade-up duration-75 {anims} w-[600px] h-[200px]"
>
    <slot />
    <button
        on:click={() => dialog.close()}
        class="absolute top-0 right-0 m-4 text-lg text-white font-nunito font-bold">X</button>
</dialog>
