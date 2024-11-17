<script lang="ts">
  import { push } from "svelte-spa-router";

  import type { Quiz } from "../models/quiz";
  import Button from "./Button.svelte";

  interface Props {
    quiz: Quiz;
    hostQuiz: () => void;
  }

  let { quiz, hostQuiz }: Props = $props();

  function editQuiz() {
    push(`/edit/${quiz.id}`);
  }
</script>

<div class="flex justify-between items-center bg-white border p-4 rounded-xl">
  {quiz.name}
  <div class="flex gap-2 items-center">
    <Button onclick={editQuiz}>Edit</Button>
    <Button onclick={hostQuiz}>Host</Button>
  </div>
</div>
