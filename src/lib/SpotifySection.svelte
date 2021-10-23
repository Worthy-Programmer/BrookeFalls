<script>
	export let data;
	import SpotifySong from './SpotifySong.svelte';
	import Thumb from './Thumb.svelte';
	console.log(data);

	let shuffledSongs = [];
	let clicked = true;

	// shuffledSongs = songs
	// 	.map((value) => ({ value, sort: Math.random() }))
	// 	.sort((a, b) => a.sort - b.sort)
	// 	.map(({ value }) => value);

	let songs_time = data.songData.tracks.reduce(
		(sum, song) => sum + song.duration_ms,
		0
	);

	const millisToMinutesAndSeconds = (millis) => {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return seconds == 60
			? minutes + 1 + ':00'
			: minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};
</script>

<section class="bg-white border-b py-8 mx-auto max-w-[1060px]">
	<div class="flex flex-wrap xl:w-[1060px] flex-col-reverse">
		<div class="bg-black p-9 text-gray-300 min-h-screen p-2">
			<!-- header -->
			<div class="flex flex-wrap p-5">
				<img
					alt="Brooke Falls"
					class="mr-6 h-[460px]"
					src="https://yt3.ggpht.com/vhUgGzGNZhWO5haBqTgF2ZMnqHDWX2usT0RVvlvEaGd0FbfKelxkjKYHBe0Wecip_f39ow7-5A=s900-c-k-c0x00ffffff-no-rj"
				/>
				<div class="flex flex-col justify-center">
					<!-- content -->
					<h4 class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
						Playlist
					</h4>
					<h1 class="mt-0 mb-2 text-white text-4xl">Brooke Falls</h1>
					<p class="text-gray-600 text-sm">
						Created by <a href="/">Spotify</a> - {data.songData.tracks.length} Songs
						-
						{millisToMinutesAndSeconds(songs_time)}
					</p>
				</div>
			</div>

			<!-- action buttons -->
			<!-- <div class="mt-6 flex justify-between">
          <div class="flex">
            <button
              on:click={shuffle}
              class="bg-green-500 ml-4 p-2 text-green-100 block px-8 rounded-full"
              >Shuffle
            </button>
          </div>
        </div> -->

			<!-- song list   -->
			<div class="mt-10">
				<!-- song list header -->
				<div class="flex text-gray-600">
					<div class="p-2 w-8 flex-shrink-0" />
					<div class="p-2 w-8 flex-shrink-0" />
					<div class="p-2 w-full">Title</div>
					<div class="p-2 w-full">Artist</div>
					<div class="p-2 w-full">Album</div>
					<div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
				</div>
				{#each data.songData.tracks as song}
					<SpotifySong {song} />
				{/each}
			</div>
		</div>
	</div>
	<div class="container max-w-5xl mx-auto m-8">
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>
		<div class="flex flex-wrap">
			<div class="w-5/6 sm:w-1/2 p-6">
				<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
					Lorem ipsum dolor sit amet
				</h3>
				<p class="text-gray-600 mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
					ipsum eu nunc commodo posuere et sit amet ligula.
					<br />
					<br />
				</p>
			</div>
			<div class="w-full sm:w-1/2">
				<Thumb />
			</div>
		</div>
	</div>
</section>
