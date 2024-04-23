<script lang="ts">
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  // default shown tab
  export let defaultValue: string;
  // the tab controller
  export let code = defaultValue;
  const items = writable<
    { language: string; displayName: string; value: string }[]
  >([]);

  const activeTableValueStore = writable(code);
  let displayName = "";

  export let single = false;

  function onSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    $activeTableValueStore = value;
  }

  setContext("items", items);
  setContext("activeTabValue", activeTableValueStore);

  $: displayName =
    $items.find((n) => n.value == $activeTableValueStore)?.displayName || "";
  $: code = $activeTableValueStore;
</script>

<div class="ml-auto flex flex-col">
  <ul class="p-2 bg-black text-white flex justify-end rounded-md">
    <div class="mr-auto p-2">
      {displayName}
    </div>
    {#if !single}
      <select
        class="text-white bg-black mx-4 cursor-pointer hover:bg-gray-900"
        on:change={onSelect}
        bind:value={$activeTableValueStore}
      >
        {#each $items as item}
          <option value={item.value}>
            {item.value}
          </option>
        {/each}
      </select>
    {/if}
  </ul>
  <div>
    <slot />
  </div>
</div>
