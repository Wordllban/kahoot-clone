<script lang="ts">
  import type { Quiz } from "../models/quiz";
  import Button from "./Button.svelte";

  interface Props {
    quiz: Quiz;
    hostQuiz: () => void;
  }

  let { quiz, hostQuiz }: Props = $props();
</script>

<div class="flex justify-between items-center bg-white border p-4 rounded-xl">
  {quiz.name}
  <Button onclick={hostQuiz}>Host</Button>
</div>
