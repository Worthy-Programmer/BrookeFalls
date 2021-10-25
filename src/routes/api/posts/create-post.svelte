<script>
  let fileVar;

  export async function load({ fetch, page: { host } }) {
    const posts = (
      await (await fetch(`https://${host}/.netlify/functions/posts`)).json()
    ).map((post) => {
      post.slug = getSlug(post.meta.path);
      return post;
    });
    posts.sort(sortPostsByDate);
    return {
      props: { posts },
    };
  }
</script>

<div class="h-[80vh] flex flex-col items-center justify-center">
  <form class="flex flex-col items-center" on:submit={submitForm}>
    <input type="file" bind:files={fileVar} />

    <input
      class="bg-indigo-500 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
    />
  </form>
</div>
