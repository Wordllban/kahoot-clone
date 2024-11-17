<script lang="ts">
  import Button from "../../lib/Button.svelte";
  import PlayerNameCard from "../../lib/lobby/PlayerNameCard.svelte";
  import { players, type HostGame } from "../../services/host/host";

  interface Props {
    game: HostGame;
  }

  const { game }: Props = $props();

  function start() {
    game.start();
  }

  console.log("host lobby view");
</script>

<div class="p-8 bg-purple-400">
  <div class="flex justify-end">
    <Button onclick={start}>Start game</Button>
  </div>
  <div class="text-center text-white">
    <h2 class="text-4xl">Join with game code</h2>
    <!-- <h2 class="text-6xl font-bold mt-4">{$gameCode}</h2> -->
  </div>
  <h2 class="mt-10 text-white text-4xl font-bold">
    Players ({$players.length})
  </h2>
  <div class="flex flex-wrap gap-2">
    {#each $players as player (player.id)}
      <PlayerNameCard {player} onclick={() => {}} />
    {:else}
      <p class="text-white">No players have joined yet</p>
    {/each}
  </div>
</div>
