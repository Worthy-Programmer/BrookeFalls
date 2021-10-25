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

<section class="bg-white border-b py-8 max-w-[1060px] xs:w-[100vw]">
  <div class="flex  flex-wrap xl:w-[1060px] flex-col-reverse">
    <div class="bg-black sm:px-4 text-gray-300 min-h-screen">
      <!-- header -->
      <div class="flex flex-wrap">
        <img
          alt="Brooke Falls"
          class="mr-6 h-[460px] sm:w-auto xs:w-[90vw]"
          src="https://yt3.ggpht.com/vhUgGzGNZhWO5haBqTgF2ZMnqHDWX2usT0RVvlvEaGd0FbfKelxkjKYHBe0Wecip_f39ow7-5A=s900-c-k-c0x00ffffff-no-rj"
        />
        <div class="flex flex-col justify-center px-6 pt-7">
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
          <div class="p-2 w-full xs:hidden sm:block">Artist</div>
          <div class="p-2 w-full">Album</div>
          <div class="p-2 w-12 flex-shrink-0 text-right xs:hidden sm:block">
            ⏱
          </div>
        </div>
        {#each data.songData.tracks as song}
          <SpotifySong {song} />
        {/each}
      </div>
    </div>
  </div>
</section>
