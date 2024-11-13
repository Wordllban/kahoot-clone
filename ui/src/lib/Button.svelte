<script lang="ts">
  interface Props {
    children: any;
  }
  let { children }: Props = $props();
</script>

<button class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
  {@render children?.()}
</button>
