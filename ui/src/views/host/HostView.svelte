<script lang="ts">
  import type { Component, SvelteComponent } from "svelte";
  import type { Quiz } from "../../models/quiz";
  import { HostGame, gameState } from "../../services/host/host";
  import { GameState } from "../../services/net";
  import HostQuizListView from "./HostQuizListView.svelte";
  import HostLobbyView from "./HostLobbyView.svelte";
  import HostPlayerView from "./HostPlayerView.svelte";

  const game = new HostGame();
  let active = $state(false);

  function hostQuiz(quiz: Quiz) {
    game.hostQuiz(quiz.id);
    active = true;
    console.log(quiz, game);
  }

  const views: Record<GameState, Component<any>> = {
    [GameState.Lobby]: HostLobbyView,
    [GameState.Play]: HostPlayerView,
  };
</script>

{#if active}
  {@const ViewComponent = views[$gameState]}
  <ViewComponent {game} />
{:else}
  <HostQuizListView {hostQuiz} {game} />
{/if}
