import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Svelty Tennis Championship'
	}
});

export default app;