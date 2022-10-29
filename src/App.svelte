<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';

	// tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;  //e.detail is what we sent along in Tabs.svelte
	}
</script>

<Header />
<main>
	<!-- pass activeItem and items in as props to Tabs component -->
	<!-- Tabs is listening for tabChange event -->
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	<!-- show different components based on activeItem selected -->
	{#if activeItem === 'Current Polls'}
		<p>Poll list component goes here</p>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm />
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>