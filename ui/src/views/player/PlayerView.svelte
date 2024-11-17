<script lang="ts">
  import type { Component } from "svelte";
  import { GameState } from "../../services/net";
  import { PlayerGame, playerGameState } from "../../services/player/player";
  import PlayerJoinView from "./PlayerJoinView.svelte";
  import PlayerLobbyView from "./PlayerLobbyView.svelte";
  import PlayerPlayView from "./PlayerPlayView.svelte";
  import PlayerRevealView from "./PlayerRevealView.svelte";

  const game = new PlayerGame();
  let active = $state(false);

  function onJoin() {
    active = true;
  }

  const views: Record<GameState, Component<any> | undefined> = {
    [GameState.Lobby]: PlayerLobbyView,
    [GameState.Play]: PlayerPlayView,
    [GameState.Reveal]: PlayerRevealView,
    [GameState.Intermission]: PlayerRevealView,
    [GameState.End]: undefined,
  };
</script>

{#if active}
  {@const ViewComponent = views[$playerGameState]}
  <ViewComponent {game} />
{:else}
  <PlayerJoinView {onJoin} {game} />
{/if}
