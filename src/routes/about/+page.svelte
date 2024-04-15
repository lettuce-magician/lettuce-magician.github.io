<script lang="ts">
  import clsx from "clsx";
  import { locale } from "$lib/data";
  import ContentEn from "./en.md.svx";
  import ContentPt from "./pt-br.md.svx";
  let windowHeight: number;
  let contentHeight: number;
</script>

<svelte:window bind:innerHeight={windowHeight} />
<div class="size-full overflow-auto p-24 grid place-items-center">
  <div
    class={clsx(
      "w-full flex justify-center",
      contentHeight < windowHeight ? "items-center h-full" : ""
    )}
  >
    <div class="p-4 bg-gray-800 rounded-xl w-3/4">
      {#if ($locale??"").toLowerCase() == "en"}
        <ContentEn />
      {/if}
      {#if ($locale??"").toLowerCase() == "pt-br"}
        <ContentPt />
      {/if}
    </div>
  </div>
</div>
