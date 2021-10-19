<script>
  import '../app.scss';
  import Nav from '$lib/Nav.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import GithubCorner from '$lib/GithubCorner.svelte';
  import './tailwind.css';
  let open = false;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Overpass"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Mono"
  />
</svelte:head>

<GithubCorner />

<Sidebar bind:open />
<Nav bind:sidebar={open} />
<div class="g-app-wrapper">
  <slot />
</div>
