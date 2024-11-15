<script lang="ts">
  interface Props {
    children: any;
    onclick?: () => void;
  }

  let { children, onclick }: Props = $props();
</script>

<button
  {onclick}
  class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
  {@render children?.()}
</button>
