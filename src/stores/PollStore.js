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
    {
        id: 2,
        question: 'How cute is Murphy?',
        answerA: 'The cutest',
        answerB: 'The absolute cutest',
        votesA: 4,
        votesB: 15
    },
]);

export default PollStore;

// import this file into any file where we need data from the store