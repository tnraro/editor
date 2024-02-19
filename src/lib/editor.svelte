<script lang="ts">
  import Block from "./block/block.svelte";
  import type { IBlock } from "./block/block.types";

  let blocks = $state<IBlock[]>([
    { id: "0", type: "heading1", content: ["Heading 1"] },
    { id: "1", type: "paragraph", content: ["nice to meet you!"] },
  ]);
</script>

<div class="editor" contenteditable="true">
  {#each blocks as block (block.id)}
    <Block {...block} />
  {/each}
</div>

<style>
  .editor {
    min-width: min(80ch, 100vw);
    min-height: min(10rem, 100dvh);
    outline: 1px solid #d9d9d9;
  }
</style>
