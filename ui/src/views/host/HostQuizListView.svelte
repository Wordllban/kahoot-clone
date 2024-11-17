<script lang="ts">
  interface Props {
    hostQuiz: (quiz: Quiz) => void;
    game: HostGame;
  }

  const { hostQuiz }: Props = $props();

  import QuizCard from "../../lib/QuizCard.svelte";
  import type { Quiz } from "../../models/quiz";
  import type { HostGame } from "../../services/host/host";

  let quizzes: Quiz[] = $state([]);

  async function getQuizzes(): Promise<Quiz[]> {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/quizzes`,
    );
    if (!response.ok) {
      alert("Failed to fetch quizzes!");
      return [];
    }

    const json = await response.json();
    return json;
  }

  (async function () {
    quizzes = await getQuizzes();
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
