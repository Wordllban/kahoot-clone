<script lang="ts">
  import QuizChoiceCard from "../../lib/play/QuizChoiceCard.svelte";
  import {
    type HostGame,
    tick,
    currentQuestion,
    hostGameState,
  } from "../../services/host/host";
  import { COLORS, type QuizChoice } from "../../models/quiz";
  import { GameState } from "../../services/net";
  import Clock from "../../lib/Clock.svelte";

  interface Props {
    game: HostGame;
  }

  const { game }: Props = $props();

  function getCardColor(
    choice: QuizChoice,
    state: GameState,
    defaultColor: string,
  ): string {
    if (state !== GameState.Reveal) {
      return defaultColor;
    }

    return choice.correct ? "bg-green-400" : "bg-red-400";
  }
</script>

{#if $currentQuestion != null}
  <div class="min-h-screen h-screen flex flex-col">
    <div class="bg-white text-3xl border-b p-4 font-bold text-center">
      {$currentQuestion.name}
    </div>
    <div class="flex-1 flex flex-col justify-center pl-4">
      <div class="flex justify-between items-center">
        <div class="flex flex-col items-center justify-center">
          <h4 class="text-3xl font-bold">Time left</h4>
          <Clock>
            <span class="text-3xl">{$tick}</span>
          </Clock>
        </div>
        <img
          src={$currentQuestion.picture}
          alt="center"
          class="max-w-[500px]" />
        <div class="w-24"></div>
      </div>
    </div>
    <div class="flex flex-wrap w-full h-96">
      {#each COLORS as color, i}
        <QuizChoiceCard
          color={getCardColor(
            $currentQuestion.choices[i],
            $hostGameState,
            color,
          )}>
          <span class="w-full pl-14"
            >{$currentQuestion.choices[i].name ?? ""}</span>
        </QuizChoiceCard>
      {/each}
    </div>
  </div>
{/if}
