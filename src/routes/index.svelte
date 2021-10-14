<script context="module">
  import { base } from '$app/paths';
  import Post from './Post.svelte'
  let src = ""
  let alt = ""

  export async function load({ fetch }) {
    const posts = await fetch(`${base}/index.json`)
        .then((r) => r.json());
    return {
      props: { posts }
    }
  }

</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<!--Container-->
		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-82">
			<h1 class="text-blue-900 text-3xl ">SvelteKit Blog</h1>
      <p class="info">{posts.length} posts.</p>
			<div class="mx-0 sm:mx-6">

				<div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
					
				<!--Lead Card-->
				<div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
					<a href={`${base}/${posts[0].slug}`} class="flex flex-wrap no-underline hover:no-underline">
						<div class="w-full md:w-2/3 rounded-t">	
							<img alt='image' src={posts[0].metadata.url} class="h-full w-full shadow">
						</div>

						<div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
							<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
								<p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{posts[0].metadata.title}</p>
								<div class="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS and Ghost fan</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">
									{posts[0].metadata.excerpt}
								</p>
							</div>

							<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
								<div class="flex items-center justify-between">
									<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
									<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
								</div>
							</div>
						</div>

					</a>
				</div>
				<!--/Lead Card-->


				<!--Posts Container-->
				<div class="flex flex-wrap justify-between pt-12 -mx-6">
          {#each posts as post}
					  <Post col='1/3' post={post} base={base} /> 
          {/each}
          {#each posts as post}
            <Post col='2/3' post={post} base={base} />
            <Post col='1/3' post={post} base={base} /> 
          {/each}
				</div>	
			</div>
			
			
				<!--Subscribe-->	
				<div class="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
					<h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe to my spotify</h2>
					<h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest music posts notified right to your inbox</h3>
					<div class="w-full text-center pt-4">
						<form action="#">
							<div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
								<input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
								<button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
							</div>
						</form>
					</div>
				</div>
				<!-- /Subscribe-->
			
	
				<!--Author-->
				<div class="flex w-full items-center font-sans p-8 md:p-24">
					<img class="w-10 h-10 rounded-full mr-4" src="https://www.brookefalls.com/uploads/1/8/4/2/18420859/editor/brookefalls.jpeg?1607475184" alt="Avatar of Author">
					<div class="flex-1">
						<p class="text-base font-bold text-base md:text-xl leading-none">Brooke Falls</p>
						<p class="text-gray-600 text-xs md:text-base">This awesome site was created by my friend <a class="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">Logan Bennett</a></p>
					</div>
					<div class="justify-end">
						<button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
					</div>
				</div>
				<!--/Author-->
			
		</div>
	

	</div>


	<footer class="bg-gray-900">	
		<div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

			<div class="w-full mx-auto flex flex-wrap items-center">
				<div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
					<a class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
						🎧 <span class="text-base text-gray-200">~ Brooke Falls is cool ~</span>
					</a>
				</div>
				<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
					<ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
					  <li>
						<a class="inline-block py-2 px-3 text-white no-underline" href="#">Active</a>
					  </li>
					  <li>
						<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
					  </li>
					  <li>
						<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
					  </li>
						<li>
						<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
					  </li>
					</ul>
				</div>
			</div>
        

		
		</div>
	</footer>

<style lang="scss">

  h1 {
    margin-bottom: 0;
  }

  h2.title {
    margin-top: 32px;
    margin-bottom: 0;

    &:hover {
      color: #40b3ff;
    }
  }

  p {
    color: #555;
    margin: 0;
  }
</style>
