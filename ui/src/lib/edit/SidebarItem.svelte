<script lang="ts">
  import type { QuizQuestion } from "../../models/quiz";

  interface Props {
    question: QuizQuestion;
    selectedQuestion: QuizQuestion | null;
  }

  let { question, selectedQuestion = $bindable(null) }: Props = $props();

  const borderColor = $derived(
    selectedQuestion && (selectedQuestion as QuizQuestion)?.id === question.id
      ? "border-gray-500"
      : "",
  );
  function onClick() {
    selectedQuestion = question;
  }
</script>

<button
  class="bg-white rounded-md p-2 border {borderColor} hover:bg-gray-50"
  onclick={onClick}>
  {question.name}
</button>
