<script lang="ts">
  import { apiService } from "../../services/api";
  import type { Quiz, QuizQuestion } from "../../models/quiz";
  import Button from "../../lib/Button.svelte";
  import EditSidebar from "../../lib/edit/EditSidebar.svelte";
  import EditQuestion from "../../lib/edit/EditQuestion.svelte";

  interface Props {
    params: {
      quizId: string;
    };
  }

  const { params }: Props = $props();

  let quiz: Quiz | null = $state(null);
  let selectedQuestion: QuizQuestion | null = $state(null);

  (async function () {
    quiz = await apiService.getQuizById(params.quizId);
  })();

  async function save() {
    if (quiz == null) return;

    await apiService.saveQuiz(quiz.id, quiz);
  }

  function onQuestionDelete() {
    if (quiz == null) return;
    quiz.questions = quiz.questions.filter((q) => q.id != selectedQuestion?.id);

    selectedQuestion = null;
  }
</script>

{#if quiz != null}
  <div class="bg-purple-100 w-full p-2 flex justify-end">
    <div class="flex gap-2">
      <input
        type="text"
        class="border rounded px-2"
        placeholder="Quiz name"
        bind:value={quiz.name} />
      <Button onclick={save}>Save</Button>
    </div>
  </div>
  <div class="flex">
    <EditSidebar bind:questions={quiz.questions} bind:selectedQuestion />
    {#if selectedQuestion != null}
      <EditQuestion
        onDelete={onQuestionDelete}
        onChange={() => (quiz = quiz)}
        bind:selectedQuestion />
    {/if}
  </div>
{:else}
  Quiz not found.
{/if}
