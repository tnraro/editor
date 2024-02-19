<script lang="ts">
  import type { IBlock } from "./block.types";
  import Heading1 from "./heading1.svelte";
  import Paragraph from "./paragraph.svelte";

  let { ...props } = $props<IBlock>();
</script>

{#if props.type === "heading1"}
  <Heading1 {...props} />
{:else if props.type === "paragraph"}
  <Paragraph {...props} />
{/if}
