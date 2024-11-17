<script lang="ts">
  import { playerPoints } from "../../services/player/player";

  const correct = $derived($playerPoints > 0);
</script>

<div
  class={`min-h-screen text-white w-full 
    flex justify-center items-center
    ${correct ? "bg-green-500" : "bg-red-700"}`}>
  {#if correct}
    <div class="flex flex-col text-center">
      <h2 class="text-3xl">Correct!</h2>
      <p class="text-2xl">+ {$playerPoints} points</p>
    </div>
  {:else}
    <h2 class="text-3xl">Incorrect :(</h2>
  {/if}
</div>
