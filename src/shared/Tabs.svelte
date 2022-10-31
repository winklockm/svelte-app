<script>
    import { createEventDispatcher } from 'svelte';
    // use dispatch function to dispatch an event whenever a user clicks on an li tag
    const dispatch = createEventDispatcher();

    // accept the props passed in from app by adding export in front of variables
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <!-- when an li is clicked dispatch a tabChange event and send along the item that was clicked -->
            <li on:click={() => dispatch('tabChange', item)}>
                <!-- if the item = activeItem apply class of active -->
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    .active {
        color: #DE6B07;
        border-bottom: 2px solid #DE6B07;
        padding-bottom: 8px;
    }
</style>