<script lang="ts">
  import { apiService } from "../../services/api";
  import type { Quiz } from "../../models/quiz";

  interface Props {
    params: {
      quizId: string;
    };
  }

  const { params }: Props = $props();

  let quiz: Quiz | null = $state(null);

  (async function () {
    quiz = await apiService.getQuizById(params.quizId);
  })();
</script>

{params.quizId}
