<script lang="ts">
  import type { Component } from "svelte";
  import type { Quiz } from "../../models/quiz";
  import { HostGame, hostGameState } from "../../services/host/host";
  import { GameState } from "../../services/net";
  import HostQuizListView from "./HostQuizListView.svelte";
  import HostLobbyView from "./HostLobbyView.svelte";
  import HostPlayView from "./HostPlayView.svelte";
  import HostIntermissionView from "./HostIntermissionView.svelte";
  import HostEndView from "./HostEndView.svelte";

  const game = new HostGame();
  let active = $state(false);

  function hostQuiz(quiz: Quiz) {
    game.hostQuiz(quiz.id);
    active = true;
  }

  const views: Record<GameState, Component<any>> = {
    [GameState.Lobby]: HostLobbyView,
    [GameState.Play]: HostPlayView,
    [GameState.Intermission]: HostIntermissionView,
    [GameState.Reveal]: HostPlayView,
    [GameState.End]: HostEndView,
  };
</script>

{#if active}
  {@const ViewComponent = views[$hostGameState]}
  <ViewComponent {game} />
{:else}
  <HostQuizListView {hostQuiz} {game} />
{/if}
