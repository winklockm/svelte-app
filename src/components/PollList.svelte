<script>
    // import { onMount, onDestroy } from 'svelte';
    import PollStore from '../stores/PollStore';
    import PollDetails from "./PollDetails.svelte";
    export let polls = [];

</script>

<div class="poll-list">
    <!-- // $PollStore here subscribes on mount AND unsubscribes on destroy -->
    {#each $PollStore as poll (poll.id)}
        <div><PollDetails {poll} on:vote/></div>
    {/each}
</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>