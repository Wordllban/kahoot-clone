<script lang="ts">
  import "./app.css";

  import Button from "./lib/Button.svelte";
  import QuizCard from "./lib/QuizCard.svelte";

  let quizzes: { id: string; name: string }[] = [];

  async function getQuizzes() {
    let response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/v1/quizzes`,
    );
    if (!response.ok) {
      alert("Failed!");
      return;
    }

    let json = await response.json();
    quizzes = json;
  }
  function connectWS() {
    let websocket = new WebSocket(import.meta.env.VITE_WS_API_URL);
    websocket.onopen = () => {
      console.log("Connected to WebSocket");
      websocket.send("Hello world!");
    };
  }
</script>

<button onclick={getQuizzes}>Get quizzes</button>
<button onclick={connectWS}>Connect WebSocket</button>
<Button>Click</Button>

{#each quizzes as quiz}
  <QuizCard {quiz} />
{/each}
