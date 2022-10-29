import App from './App.svelte';

// creates new instance of App component
const app = new App({
	target: document.body, // target says that we want to insert the App component in the body tag of index.html
	// props: {
	// 	name: 'world' // passes name prop to the App component
	// }
});

export default app;