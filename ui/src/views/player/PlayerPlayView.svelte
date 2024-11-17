<script lang="ts">
  import { onMount } from "svelte";
  import QuizChoiceCard from "../../lib/play/QuizChoiceCard.svelte";
  import { COLORS } from "../../models/quiz";
  import type { PlayerGame } from "../../services/player/player";

  interface Props {
    game: PlayerGame;
  }

  const { game }: Props = $props();

  let answered: boolean = $state(false);

  function onClick(i: number) {
    game.answer(i);
    answered = true;
  }

  onMount(() => {
    answered = false;
  });
</script>

<div class="flex flex-wrap w-full min-h-screen">
  {#if answered}
    <div class="p-8">
      <p class="text-2xl text-black">Lightning fast?</p>
    </div>
  {:else}
    {#each COLORS as color, i}
      <QuizChoiceCard {color}>
        <button class="h-full w-full" onclick={() => onClick(i)}>X</button>
      </QuizChoiceCard>
    {/each}
  {/if}
</div>
