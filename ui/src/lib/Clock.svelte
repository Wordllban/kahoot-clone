<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<div
  class="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center ml-8">
  {@render children?.()}
</div>
