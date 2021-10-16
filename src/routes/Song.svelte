<script>
    import {onMount} from 'svelte'
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
    <div class="flex flex-col items-center m-9 ">
        <img class="h-52" src={song.album.images[0].url} alt="">
        <h1 class="text-darkGray">{song.album.name}</h1>
        <h1>By: 
            {#each song.artists as artist}
                {artist.name}
            {/each}    
        <h1>
    </div>
    {/each}
{/if}
{/if}
</div>
