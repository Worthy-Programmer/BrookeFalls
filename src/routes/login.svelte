<script>
	import { onMount } from 'svelte';
	import auth from '$lib/services/auth';
	import { isAuthenticated, user } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});

	function login() {
		auth.loginWithPopup(auth0Client).then(() => {
			goto('/dashboard');
		});
	}

	function logout() {
		auth.logout(auth0Client);
	}
</script>

<div class="flex flex-col space-y-4 justify-center items-center h-[80vh]">
	{#if $isAuthenticated}
		<h1 class="text-3xl">Logout</h1>

		<div class="flex items-center justify-center flex-col">
			<h2 class="my-4">Hey {$user.name}!</h2>
			{#if $user.picture}
				<img src={$user.picture} class="h-40 w-40" alt={user.name} />
			{:else}
				<img
					src="https://source.unsplash.com/random/400x300"
					alt="Random Photo"
				/>
			{/if}
			<button
				class="bg-indigo-500 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				on:click={logout}>Logout</button
			>
		</div>
	{:else}
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-3xl">Welcome to the login page!</h1>
			<p class="text-[14px]">Sign in or sign up clicking the button below</p>
			<button
				class="bg-indigo-500 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				on:click={login}>Login</button
			>
		</div>
	{/if}
</div>
