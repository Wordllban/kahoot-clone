<script lang="ts">
  import "./app.css";

  import Router from "svelte-spa-router";
  import HostView from "./views/host/HostView.svelte";
  import PlayerView from "./views/player/PlayerView.svelte";

  const routes = {
    "/": PlayerView,
    "/host": HostView,
    //"/edit/:quizId": EditQuizView,
  };
</script>

<Router {routes} />
