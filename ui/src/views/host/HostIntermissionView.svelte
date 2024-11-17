<script lang="ts">
  import Button from "../../lib/Button.svelte";
  import Leaderboard from "../../lib/Leaderboard.svelte";
  import { HostGame, leaderboard } from "../../services/host/host";

  interface Props {
    game: HostGame;
  }

  const { game }: Props = $props();

  function skip() {
    game.start();
  }
</script>

<div class="bg-purple-500 min-h-screen w-full">
  <div class="flex justify-end p-8">
    <Button onclick={skip}>Skip</Button>
  </div>
  <div class="mt-20 flex justify-center">
    <Leaderboard leaderboard={$leaderboard} finish={false} />
  </div>
</div>
