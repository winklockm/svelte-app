<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <!-- slot is a way to pass data into the button -->
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary {
        background-color: #DE6B07;
        color: white;
    }
    .secondary {
        background: #395F60;
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        color: #DE6B07;
        background: white;
        border: 2px solid #DE6B07;
    }
    .secondary.inverse {
        color: #395F60;
        background: white;
        border: 2px solid #395F60;
    }
</style>