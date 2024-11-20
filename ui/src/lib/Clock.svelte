<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    ml?: string;
  }

  const { children, ml = "" }: Props = $props();
</script>

<div
  class={`bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center ${ml}`}>
  {@render children?.()}
</div>
