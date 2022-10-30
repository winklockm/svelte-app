<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import PollList from './components/PollList.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';

	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;  //e.detail is what we sent along in Tabs.svelte
	}

	const handleAdd = (e) => {
		activeItem = 'Current Polls';
	}

</script>

<Header />
<main>
	<!-- pass activeItem and items in as props to Tabs component -->
	<!-- Tabs is listening for tabChange event -->
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	<!-- show different components based on activeItem selected -->
	{#if activeItem === 'Current Polls'}
		<PollList />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>