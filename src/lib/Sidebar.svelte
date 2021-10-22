<script>
  export let open = false;
</script>

<aside
  class="z-40 absolute w-full h-full bg-gradient-to-r from-pink-400 to-blue-300  border-r-2 shadow-lg"
  class:open
>
  <div class="flex items-center justify-center">
    <nav class="p-40 text-4xl">
      <a
        on:click={() => (open = !open)}
        class="block p-12 font-headline "
        href="/">Home</a
      >
      <a
        on:click={() => (open = !open)}
        class="block p-12 font-headline "
        href="/about">About</a
      >
      <a
        on:click={() => (open = !open)}
        class="block p-12 font-headline "
        href="/play">Play</a
      >
    </nav>
  </div>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
