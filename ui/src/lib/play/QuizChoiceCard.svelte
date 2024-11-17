<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    color: string;
    children: Snippet;
  }

  const { children, color }: Props = $props();
</script>

<div class={`w-1/2 text-white font-bold flex items-center text-3xl ${color}`}>
  {@render children?.()}
</div>
