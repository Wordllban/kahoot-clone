<script lang="ts">
  import Button from "../../lib/Button.svelte";
  import type { PlayerGame } from "../../services/player/player";

  interface Props {
    onJoin: () => void;
    game: PlayerGame;
  }

  const { game, onJoin }: Props = $props();

  let code: string = $state("");
  let name: string = $state("");

  function join() {
    onJoin();
    game.join(code, name);
  }
</script>

<div class="bg-purple-400 min-h-screen w-full flex items-center justify-center">
  <div>
    <h2 class="text-white font-bold text-5xl text-center">Quiz</h2>
    <div class="flex flex-col gap-2 mt-10 items-center text-center">
      <input
        bind:value={code}
        type="text"
        placeholder="Game code"
        class="p-2 rounded" />
      <input
        bind:value={name}
        type="text"
        placeholder="Name"
        class="p-2 rounded" />
      <Button onclick={join}>Join Game</Button>
    </div>
  </div>
</div>
