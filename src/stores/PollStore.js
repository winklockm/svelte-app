import { writable } from "svelte/store";

// create store
const PollStore = writable([
    {
        id: 1,
        question: 'Trick or Treat?',
        answerA: 'Trick',
        answerB: 'Treat',
        votesA: 3,
        votesB: 5
    },
]);

export default PollStore;

// import this file into any file where we need data from the store