<script>
  import { getSession } from '../envFunctions';
  import Song from '../lib/Song.svelte';

  export let songs;

  export async function load({ fetch, page: { host } }) {
    const songs = await (
      await fetch(`https://${host}/.netlify/functions/songs`)
    ).json();

    console.log(songs);
    return {
      props: { songs },
    };
  }
</script>

<div>
  <Song {songs} />
</div>
