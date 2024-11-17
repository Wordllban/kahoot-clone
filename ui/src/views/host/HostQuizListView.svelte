<script lang="ts">
  import QuizCard from "../../lib/QuizCard.svelte";
  import type { Quiz } from "../../models/quiz";
  import { apiService } from "../../services/api";
  import type { HostGame } from "../../services/host/host";

  interface Props {
    hostQuiz: (quiz: Quiz) => void;
    game: HostGame;
  }

  const { hostQuiz }: Props = $props();

  let quizzes: Quiz[] = $state([]);

  (async function () {
    quizzes = await apiService.getQuizzes();
  })();
</script>

<div class="p-8">
  <h2 class="text-4xl font-bold">Your quizzes</h2>
  <div class="flex flex-col gap-2 mt-4">
    {#each quizzes as quiz (quiz.id)}
      <QuizCard {quiz} hostQuiz={() => hostQuiz(quiz)} />
    {/each}
  </div>
</div>
