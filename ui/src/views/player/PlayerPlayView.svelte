<script lang="ts">
  import QuizChoiceCard from "../../lib/play/QuizChoiceCard.svelte";
  import { COLORS } from "../../models/quiz";
  import type { PlayerGame } from "../../services/player/player";

  interface Props {
    game: PlayerGame;
  }

  const { game }: Props = $props();

  function onClick(i: number) {
    game.answer(i);
  }
</script>

<div class="flex flex-wrap w-full min-h-screen">
  {#each COLORS as color, i}
    <QuizChoiceCard {color}>
      <button class="h-full w-full" onclick={() => onClick(i)}>X</button>
    </QuizChoiceCard>
  {/each}
</div>
