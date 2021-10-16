 <script>
    export let base;
    export let post;
    export let col;

	import QRCODE from '/Brooke_QR_Petals.png'
    let src = post.metadata.url;
    let alt = post.metadata.url;
 </script>

{#if col == '1/3'}
<!--1/3 col -->
<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
	<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
		<a href={`${base}/${post.slug}`} class="flex flex-wrap no-underline hover:no-underline">
			<img src={src} alt={alt} class="h-64 w-full rounded-t pb-6">
			<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
			<div class="w-full font-bold text-xl text-gray-900 px-6">Listen to Feverdreamer on Spotify!</div>
			<p class="text-gray-800 font-serif text-base px-6 mb-5">
				<!-- {post.metadata.excerpt} -->
				It's been a project of mine for a long time, so I hope you like it! Add it to your playlist.
			</p>
			<div  class="ml-auto mr-auto mb-2">
				<img class="w-32" src={QRCODE} alt="">	
			</div>
	    </a>
	</div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
                <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="https://www.fox.temple.edu/wp-content/uploads/2021/02/Logan-Bennett.jpg" alt="Avatar of Author">
                <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
        </div>
	</div>
</div>
{:else if col == '1/2'}
	<!--1/2 col -->
	<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
		<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
				<a href={`${base}/${post.slug}`} class="flex flex-wrap no-underline hover:no-underline">
                    <img src={src} alt={alt} class="h-full w-full rounded-t pb-6">
                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                    <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                       {post.metadata.excerpt}
                    </p>
				</a>
		</div>
	    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
			<div class="flex items-center justify-between">
			<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
			<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
		</div>
	</div>
</div>
{:else if col == '2/3'}
<!--2/3 col -->
<div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
	<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
		<a href={`${base}/${post.slug}`} class="flex flex-wrap no-underline hover:no-underline">	
            <img src={src} alt={alt} class="h-full w-full rounded-t pb-6">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
            <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
            <p class="text-gray-800 font-serif text-base px-6 mb-5">
              {post.metadata.excerpt}
            </p>
		</a>
	</div>
	<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
		<div class="flex items-center justify-between">
			<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="https://www.brookefalls.com/uploads/1/8/4/2/18420859/editor/brookefalls.jpeg?1607475184" alt="Avatar of Author">
			<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
		</div>
	</div>
</div>

{/if}