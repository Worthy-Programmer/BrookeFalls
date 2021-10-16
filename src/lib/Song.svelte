<script>
    import {onMount} from 'svelte'
    import SongCard from './SongCard.svelte';
    
    export let spotifyApi;
  
    let songs = []

    onMount(async () => {
        songs = await fetch()
        console.log(songs)
        return songs
    })

      // Do search using the access token
        const fetch = async () => spotifyApi.searchTracks('artist:brooke falls').then(
        function(data) {
            let songs = data.body.tracks.items.map(e => {
                if(e.artists.some(y => y.name === 'brooke falls')){
                    return e;
                }
            })
            return songs.filter(value => value !== undefined);
        },
        function(err) {
            console.log('Something went wrong!', err);
        }
    );

   
</script>

<div class="flex justify-center items-center flex-wrap">
{#if songs !== undefined}
    {#if songs.length > 0}
    {#each songs as song}
        <SongCard song={song} />
    {/each}
{/if}
{/if}
</div>

