<script>
  import { base } from '$app/paths';
  export let sidebar = false;
  import Hamburger from './Hamburger.svelte';
  import { isAuthenticated, user } from './stores/auth';
  console.log(user);
</script>

<div>
  <nav class="relative flex items-center justify-between h-16 z-50 bg-gray-700">
    <Hamburger bind:open={sidebar} />

    <a href="{base}/"
      ><h3 class="text-xl xs:hidden md:block text-white pl-12">HOME 🏠</h3></a
    >

    <a href="{base}/play"
      ><h3 class="text-xl xs:hidden md:block text-white">PLAY 🎧</h3></a
    >
    <a href="{base}/login"
      ><h3 class="text-xl xs:hidden md:block text-white pl-12">
        {$isAuthenticated ? 'LOGOUT' : 'LOGIN'}
      </h3></a
    >
    {#if $isAuthenticated && $user.email == 'bennett.j.logan@gmail.com'}
      <a href="{base}/api/posts/create-post"
        ><h3 class="text-xl xs:hidden md:block text-white pl-12">Post</h3></a
      >
    {/if}
    {#if $isAuthenticated}
      <a href="{base}/dashboard"
        ><h3 class="text-xl xs:hidden md:block text-white pl-12">
          Dashboard
        </h3></a
      >
    {/if}
    <div class="mr-20 flex w-1/2 justify-end items-center">
      <a
        class="flex xs:hidden md:block items-center h-10 p-2 md:h-auto md:p-4"
        href="/about"
      >
        <h2 class="text-white">About</h2>
      </a>
      <a
        class=" inline-block text-white no-underline hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
        data-tippy-content="@twitter_handle"
        href="https://twitter.com/intent/tweet?url=#"
      >
        <icon
          class="fab fa-twitter fa fill-current h-4 text-white hover:text-blue-400 transition-colors"
        />
      </a>
      <a
        class=" inline-block text-white no-underline  hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
        data-tippy-content="#facebook_id"
        href="https://www.facebook.com/sharer/sharer.php?u=#"
      >
        <icon
          class="fab fa-facebook-f fa fill-current h-4 text-white hover:text-blue-500 transition-colors"
        />
      </a>
    </div>
  </nav>
</div>
