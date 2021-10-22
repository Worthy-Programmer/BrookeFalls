<script>
  export let song;

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  let clicked = true;

  const handleClicked = () => {
    clicked = !clicked;
  };
</script>

<div
  on:click={handleClicked}
  class="flex border-b cursor-pointer border-gray-800 hover:bg-gray-800"
>
  <div class="p-3 w-8 flex-shrink-0">▶️</div>
  <div class="p-3 w-8 flex-shrink-0">🎧</div>
  <div class="p-3 w-full">{song.name}</div>
  <div class="p-3 w-full">
    {song.artists.map((artist) => {
      return artist.name;
    })}
  </div>
  <div class="p-3 w-full">{song.album.name}</div>
  <div class="p-3 w-12 flex-shrink-0 text-right">
    {millisToMinutesAndSeconds(song.duration_ms)}
  </div>
  <audio class="hidden" controls="controls" bind:paused={clicked}>
    <source autoStop src={song.preview_url} type="audio/mpeg" />
  </audio>
</div>
