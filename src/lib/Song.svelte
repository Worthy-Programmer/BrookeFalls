<script>
  import { onMount } from 'svelte';
  import SongCard from './SongCard.svelte';
  import { onDestroy } from 'svelte';

  let autoStop = false;
  let controlColor = '#444';
  let controlScale = '0.5';
  let autoplay = false;
  let autoplaySpeed = 5000;

  export let spotifyApi;
  let songs = [];

  onMount(async () => {
    songs = await fetch();
    console.log(songs);
    return songs;
  });

  // Do search using the access token
  const fetch = async () =>
    spotifyApi.searchTracks('artist:brooke falls').then(
      function (data) {
        let songs = data.body.tracks.items.map((e) => {
          if (e.artists.some((y) => y.name === 'brooke falls')) {
            return e;
          }
        });
        return songs.filter((value) => value !== undefined);
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );

  let interval;

  const rotateLeft = (e) => {
    const transitioningImage = songs[songs.length - 1];
    autoStop = true;
    songs.forEach((ele) => {
      document.getElementById(ele.id).classList.add('hidden');
    });

    document.getElementById(transitioningImage.id).style.opacity = 0;
    //document.getElementById(transitioningImage.id).classList.remove('hidden');

    songs = [songs[songs.length - 1], ...songs.slice(0, songs.length - 1)];

    setTimeout(
      () => (document.getElementById(transitioningImage.id).style.opacity = 1)
    );
  };
  const rotateRight = (e) => {
    const transitioningImage = songs[0];
    autoStop = true;
    songs.forEach((ele) => {
      document.getElementById(ele.id).classList.add('hidden');
    });

    console.log(songs);

    document.getElementById(transitioningImage.id).style.opacity = 0;

    if (transitioningImage.id === '6KMQRCEtB8pTxjgXzz7oNC') {
      document.getElementById('carousel-container').style.backgroundColor =
        'yellow';
    }
    if (transitioningImage.id === '1k8MJLrIPOWpAaAPBRBKSw') {
      document.getElementById('carousel-container').style.backgroundColor =
        'orange';
    }
    if (transitioningImage.id === '6XCxe4Tphv9xhSUNa0W7A4') {
      document.getElementById('carousel-container').style.backgroundColor =
        'gray';
    }
    //document.getElementById(transitioningImage.id).classList.remove('hidden');

    songs = [...songs.slice(1, songs.length), songs[0]];
    setTimeout(
      () => (document.getElementById(transitioningImage.id).style.opacity = 1)
    );
  };
  const startAutoPlay = () => {
    if (autoplay) {
      interval = setInterval(rotateLeft, autoplaySpeed);
    }
  };
  const stopAutoPlay = () => {
    clearInterval(interval);
  };
  if (autoplay) {
    startAutoPlay();
  }
  onDestroy(() => {
    stopAutoPlay();
  });
</script>

<div id="carousel-container" class="flex items-center justify-center">
  <button id="left" on:click={rotateLeft}>
    <slot name="left-control">
      <svg
        width="39px"
        height="110px"
        id="svg8"
        transform={`scale(${controlScale})`}
      >
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
            style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
            d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
            id="path1412"
          />
        </g>
      </svg>
    </slot>
  </button>
  <div id="carousel-songs" class="flex">
    {#each songs as song (song.id)}
      <div
        id={song.id}
        class={songs[1].id == song.id ? 'block' : 'hidden'}
        style={`width: 100%; margin: 0;`}
      >
        <SongCard {song} />
      </div>
    {/each}
  </div>
  <button id="right" on:click={rotateRight}>
    <slot name="right-control">
      <svg
        width="39px"
        height="110px"
        id="svg8"
        transform={`rotate(180) scale(${controlScale})`}
      >
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
            style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
            d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
            id="path1412"
          />
        </g>
      </svg>
    </slot>
  </button>
</div>
