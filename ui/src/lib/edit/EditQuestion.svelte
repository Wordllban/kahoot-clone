<script lang="ts">
  import { COLORS, type QuizQuestion } from "../../models/quiz";
  import Button from "../Button.svelte";
  import Clock from "../Clock.svelte";
  import QuizChoiceCard from "../play/QuizChoiceCard.svelte";

  interface Props {
    onDelete: () => void;
    onChange: () => void;
    selectedQuestion: QuizQuestion;
  }

  let {
    onDelete,
    onChange,
    selectedQuestion = $bindable({
      id: "",
      name: "",
      time: 0,
      choices: [],
    }),
  }: Props = $props();

  function onTimeChange(e: Event) {
    let target = e.target as HTMLInputElement;
    selectedQuestion.time = parseInt(target.value);
  }
</script>

<div class="p-14 w-full flex-1">
  <div class="flex flex-col min-h-[95%] border">
    <div
      class="flex font-bold text-center bg-gray-50 items-center border-b p-2 justify-between">
      <div class="w-32"></div>
      <input
        class="p-4 text-3xl bg-gray-50 text-center"
        onchange={onChange}
        bind:value={selectedQuestion.name} />
      <div class="w-32">
        <Button onclick={onDelete}>Delete</Button>
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-center pl-4">
      <div class="flex justify-between items-center">
        <Clock ml="ml-8">
          <input
            value={selectedQuestion.time}
            onchange={onTimeChange}
            type="text"
            class="w-[70%] text-base p-2 bg-purple-500 text-center text-white" />
        </Clock>
        <img
          src="https://placehold.co/500x250"
          alt="center"
          class="max-w-[500px]" />

        <div class="w-24"></div>
      </div>
    </div>
    <div class="flex flex-wrap w-full h-96">
      {#each COLORS as color, i}
        <QuizChoiceCard {color}>
          <div class="px-14 w-full flex gap-2">
            <input
              class="rounded px-2 py-1 w-full text-black"
              placeholder="Choice"
              bind:value={selectedQuestion.choices[i].name} />
            <input
              type="checkbox"
              class="w-16 h-18"
              bind:checked={selectedQuestion.choices[i].correct} />
          </div>
        </QuizChoiceCard>
      {/each}
    </div>
  </div>
</div>
