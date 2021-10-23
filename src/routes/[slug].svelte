<script context="module">
	export async function load({ page, page: { host } }) {
		const slug = page.params.slug;
		const link = `https://${host}/.netlify/functions/posts?name=${slug}`;
		const post = await fetch(link).then((r) => r.json());
		return {
			props: { post },
		};
	}
</script>

<script>
	export let post;
	let date = post.meta.date.toUpperCase();
</script>

<svelte:head>
	<title>{post.meta.title}</title>
</svelte:head>

<h1 class="title">{post.meta.title}</h1>
<p class="info">
	<a href="https://github.com/Dev-Logan-Bennett">Logan Bennett</a>
	{date}
</p>
{@html post.html}

<style lang="scss">
	h1.title {
		margin-bottom: 0;
	}
</style>
