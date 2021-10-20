<script>
  export let base;
  export let post;

  let src = post.meta.url;
  let alt = post.meta.url;

  const date = new Date(post.meta.date);
</script>

<li class="mb-3 list-none">
  <a href={`${base}/${post.slug}`} class="flex">
    <div class="w-1/3">
      <img class="rounded" {src} alt="" />
    </div>
    <div class="w-2/3 p-2">
      <h3 class="text-gray-900 font-thin font-serif mb-2">
        {post.meta.title}
      </h3>
      <span class="text-xs text-gray-800 font-thin block mb-5"
        >{date.toDateString()}</span
      >
    </div>
  </a>
</li>
