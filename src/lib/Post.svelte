<script>
  export let post;
  export let base;

  const date = new Date(post.meta.date);
</script>

<div class="article-card-left">
  <div>
    <img class="article-image h-44 w-44" src={post.meta.url} alt="" />
    <h2 class="article-title">
      <a href={`${base}/${post.slug}`}>{post.meta.title}</a>
    </h2>
    <p class="article-body">
      {post.meta.excerpt}
    </p>
    <p>Posted: {date.toDateString()}</p>
    <a href={`${base}/${post.slug}`} class="readmore">Read More...</a>
  </div>
</div>
