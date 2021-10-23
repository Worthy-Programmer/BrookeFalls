<script>
	export let song;
	let clicked = true;

	const handleClicked = () => {
		clicked = !clicked;
	};
</script>

<div class="flex flex-col items-center m-9">
	<div class="flex items-center justify-center">
		<button class="h-auto" on:click={handleClicked}>
			<img
				class="h-full"
				src={song.album.images[0].url}
				alt={song.album.images[0].url}
			/>
		</button>
	</div>
	<h1 id="text">{song.album.name}</h1>
	<h1 id="text" class="flex flex-col items-center">
		By:
		{#each song.artists as artist}
			{artist.name}
		{/each}
		<audio class="hidden" controls="controls" bind:paused={clicked}>
			<source autoStop src={song.preview_url} type="audio/mpeg" />
		</audio>
	</h1>
</div>
