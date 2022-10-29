<script>
	import Modal from './Modal.svelte';

	// export let name; // export designates that name is being set from a prop outside of the component (given a prop in main.js)

	// svelte requires id when using loops
	let people = [
		{name: 'Maggie', beltColor: 'black', age: 36, id: 1},
		{name: 'Patrick', beltColor: 'blue', age: 36, id: 2},
		{name: 'Murph', beltColor: 'pink', age: 5, id: 3}
	];

	const handleDelete = (id) => {
		// delete person from people
		// runs through the people array
		// if that id is NOT equal to the id clicked it lets it be
		// if that id IS equal to the id clicked it filters it out of the array
		people = people.filter((person) => person.id != id)
	}

	let num = 2;
</script>

{#if num > 20}
	<p>Greater than 20</p>
{:else if num > 5}
	<p>Greater than 5</p>
{:else}
	<p>Not greater than 5</p>
{/if}

<Modal />
<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			{#if person.beltColor === 'black'}
				<p>MASTER NINJA</p>
			{/if}
			<p>{person.age} years old, {person.beltColor} belt</p>
			<button on:click={() => {handleDelete(person.id)}}>Delete</button>
		</div>
	{:else}
		<p>No people to show...</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>