<script lang="ts">
  interface Props {
    quiz: {
      id: string;
      name: string;
    };
  }

  let { quiz }: Props = $props();
</script>

<div class="bg-white border-2 border-green-500 p-4 rounded-xl">
  {quiz.name}
</div>
