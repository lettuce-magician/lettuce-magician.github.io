<script lang="ts">
  import type { Writable } from "svelte/store";
  import { getContext, onMount } from "svelte";
  import copy from "copy-to-clipboard";

  // the value is the language that is being used
  export let value = "";
  // the name passed throug label meta in code block
  // Example:
  /**
   * ```js label="test"
   *  ...codes
   * ```
   */
  export let label = "";
  // the File name meta passed throught the code block
  // maybe the mdsvex-remark-code-extra could just put all inside the extra
  // in the future version i am planning a few things :)
  export let file = "";
  // query parameters from the code block
  export let others: {
    "?"?: "";
    allowCopy?: "";
    name?: string;
  };

  const items =
    getContext<
      Writable<{ language: string; displayName: string; value: string }[]>
    >("items");
  const activeTabValue = getContext<Writable<string>>("activeTabValue");

  onMount(() => {
    if (!$activeTabValue) {
      $activeTabValue = value;
    }

    const item = {
      displayName: others.name || label || file || value,
      language: value,
      value: file || value,
    } satisfies (typeof $items)[0];
    $items = [...$items, item];
    return () => {
      $items = $items.splice($items.indexOf(item), 1);
    };
  });

  let theDivContent: HTMLDivElement;
</script>

{#if $activeTabValue === value}
  <div class="relative">
    <div class="contents" bind:this={theDivContent}>
      <slot />
    </div>
    {#if others.allowCopy !== undefined}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <button
        on:click={() => {
          copy(theDivContent.innerText);
        }}
        id="copy button"
        class="transition-all duration-200 focus-visible:bg-green-500 focus-within:bg-green-500 absolute size-10 right-2 text-sm top-2 p-1 rounded-md bg-blue-700 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
            fill="#FFF"
          />
        </svg>
      </button>
    {/if}
    <div>
      {others["?"] === "" ? "this code is bad :|" : ""}
    </div>
  </div>
{/if}
