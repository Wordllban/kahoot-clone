<script lang="ts">
  import type { QuizQuestion } from "../../models/quiz";
  import Button from "../Button.svelte";
  import SidebarItem from "./SidebarItem.svelte";

  interface Props {
    questions: QuizQuestion[];
    selectedQuestion: QuizQuestion | null;
  }

  let { questions = $bindable([]), selectedQuestion = $bindable(null) }: Props =
    $props();

  function addNew() {
    questions = [
      ...questions,
      {
        id: crypto.randomUUID(),
        name: "Question",
        time: 60,
        choices: [
          {
            id: crypto.randomUUID(),
            name: "",
            correct: false,
          },
          {
            id: crypto.randomUUID(),
            name: "",
            correct: false,
          },
          {
            id: crypto.randomUUID(),
            name: "",
            correct: false,
          },
          {
            id: crypto.randomUUID(),
            name: "",
            correct: false,
          },
        ],
      },
    ];
  }
</script>

<div class="bg-purple-100 min-h-screen min-w-64 p-2 flex flex-col gap-2">
  {#each questions as question}
    <SidebarItem {question} bind:selectedQuestion />
  {/each}
  <Button onclick={addNew}>Add new</Button>
</div>
