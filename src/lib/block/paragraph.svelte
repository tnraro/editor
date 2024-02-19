<script lang="ts">
  import type { IBlock } from "./block.types";
  let { content } = $props<IBlock>();
</script>

<p>{content}</p>
