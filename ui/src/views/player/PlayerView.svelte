<script lang="ts">
  import { PlayerGame } from "../../services/player/player";
  import PlayerJoinView from "./PlayerJoinView.svelte";

  const game = new PlayerGame();
  let active = $state(false);

  function onJoin() {
    active = true;
  }
</script>

{#if active}
  active
{:else}
  <PlayerJoinView {onJoin} {game} />
{/if}
