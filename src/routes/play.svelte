<script>
	import Song from '../lib/Song.svelte';
	import { get } from './songs.json';
	import { onMount } from 'svelte';

	let data;

	onMount(async () => {
		data = await get();
	});
</script>

<div>
	{#if data !== undefined}
		<Song {data} />
	{/if}
</div>
