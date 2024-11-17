<script lang="ts">
  import type { Player } from "../../models/quiz";

  interface Props {
    onclick: () => void;
    player: Player;
  }

  const { onclick, player }: Props = $props();
</script>

<button {onclick}>
  <h3
    class="text-3xl text-white px-4 py-2 rounded-xl hover:line-through"
    style="background-color: rgba(33, 33, 33, 0.3);">
    {player.name}
  </h3>
</button>
