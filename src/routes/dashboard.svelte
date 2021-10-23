<script>
	import { onMount } from 'svelte';
	import auth from '$lib/services/auth';
	import { isAuthenticated, user } from '$lib/stores/auth';

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});
</script>

<div>
	{#if $isAuthenticated}
		<h1>Hello from secret dashboard</h1>
	{:else}
		<h1>Please login</h1>
	{/if}
</div>
