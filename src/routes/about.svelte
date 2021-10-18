<script>
  import ContactForm from '$lib/ContactForm.svelte';
  import Thumb from '$lib/Thumb.svelte';
  import { onMount } from 'svelte';
  import { getSession } from '../envFunctions';
  import axios from 'axios';
  import qs from 'qs';
  import SpotifyWebApi from 'spotify-web-api-node';
  import SpotifySong from '$lib/SpotifySong.svelte';

  const vars = getSession();
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = vars;
  let songs = [];
  let songs_time = 0;
  let shuffledSongs = [];
  let clicked = true;
  //   var code =
  //     'AQB10ef01mWEsQZD7Xb9JYglDUu7tSGis0hg2XUcCF8tUbuT4UyUB4B1G4qzHAEw3kAgyCUqDRLZeeWyJMGLyyZlLPZjruw3bNSdpCywagpATR_rKV5f_Id23gQYg9H9crnUtyemTRgs-xTgZ_elTS5n6iDH_cQNAEashre3Yjq6xXoEfIHunubHnWLbOHLPzyrtIUtVmxZZHVwDb_0FNq686lVd3A';

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  const postReqToken = async () => {
    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      console.log(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  };

  let access_token = postReqToken();

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URL,
    accessToken: access_token,
  });

  onMount(async () => {
    songs = await fetch();
    shuffledSongs = songs
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    songs_time = songs.reduce((sum, song) => sum + song.duration_ms, 0);
    return songs;
  });
  // Do search using the access token
  const fetch = async () =>
    spotifyApi.searchTracks('artist:brooke falls').then(
      function (data) {
        let songs = data.body.tracks.items.map((e) => {
          if (e.artists.some((y) => y.name === 'brooke falls')) {
            return e;
          }
        });
        return songs.filter((value) => value !== undefined);
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  const shuffle = () => {
    shuffledSongs = shuffledSongs
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    document.getElementById('spotify').src = shuffledSongs[0].preview_url;

    console.log(document.getElementById('spotify'));
    clicked = !clicked;
  };
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<!--Colors-->
<div
  class="absolute top-4 -left-4 xl:w-96 xl:h-96 md:h-72 md:w-72 sm:w-64 xs:w-40 xs:h-40 sm:h-44 bg-blueBrooke rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
/>
<div
  class="absolute top-40 -left-72 xl:w-72 xl:h-72 md:h-72 md:w-72 sm:w-64 xs:w-40 xs:h-40 sm:h-44 bg-orangeBrooke rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
/>
<div
  class="absolute top-40 -left-44 xl:w-96 xl:h-96 md:h-72 md:w-72 sm:w-64 xs:w-40 xs:h-40 sm:h-44 bg-orangeBrooke rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
/>
<div
  class="absolute top-14 left-44 xl:w-96 xl:h-96 md:h-72 md:w-72 sm:w-64 xs:w-40 xs:h-40 sm:h-44 bg-pinkBrooke rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
/>

<div class="">
  <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
    <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
      <div class="max-w-lg">
        <h1 class="text-xl tracking-wide text-gray-800 lg:text-3xl xl:text-6xl">
          Set your Title
        </h1>
        <p class="mt-4 text-gray-300 text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
          asperiores alias vero magnam recusandae adipisci ad vitae laudantium
          quod rem voluptatem eos accusantium cumque.
        </p>
        <div class="mt-6">
          <div class="flex items-center">
            <div class="grid gap-8 items-start justify-center">
              <div class="relative group">
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                />
                <button
                  class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
                >
                  <span class="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-pink-600 -rotate-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <span class="pr-6 text-gray-100">New Release 2021.09</span>
                  </span>
                  <span
                    class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200"
                    >See what's new &rarr;</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
      <img
        class="object-cover w-full max-w-2xl rounded-md lg:h-full"
        src="https://www.brookefalls.com/uploads/1/8/4/2/18420859/editor/brookefalls.jpeg?1607475184"
        alt="apple watch photo"
      />
    </div>
  </div>
</div>

<section class="bg-white border-b py-8">
  <div class="container max-w-5xl mx-auto m-8">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
    >
      Title
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div class="flex flex-wrap">
      <div class="w-5/6 sm:w-1/2 p-6">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
          Lorem ipsum dolor sit amet
        </h3>
        <p class="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.
          <br />
          <br />
        </p>
      </div>
      <div class="w-full sm:w-1/2">
        <Thumb />
      </div>
    </div>
    <div class="flex flex-wrap xl:w-[1260px] flex-col-reverse sm:flex-row">
      <div class="bg-black p-9 text-gray-300 min-h-screen p-2">
        <!-- header -->
        <div class="flex flex-wrap p-5">
          <img
            class="mr-6"
            src="https://www.brookefalls.com/uploads/1/8/4/2/18420859/editor/brookefalls.jpeg?1607475184"
          />
          <div class="flex flex-col justify-center">
            <!-- content -->
            <h4
              class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs"
            >
              Playlist
            </h4>
            <h1 class="mt-0 mb-2 text-white text-4xl">Brooke Falls</h1>
            <p class="text-gray-600 text-sm">
              Created by <a>Spotify</a> - {songs.length} Songs {millisToMinutesAndSeconds(
                songs_time
              )}
            </p>
          </div>
        </div>

        <!-- action buttons -->
        <!-- <div class="mt-6 flex justify-between">
          <div class="flex">
            <button
              on:click={shuffle}
              class="bg-green-500 ml-4 p-2 text-green-100 block px-8 rounded-full"
              >Shuffle
            </button>
          </div>
        </div> -->

        <!-- song list   -->
        <div class="mt-10">
          <!-- song list header -->
          <div class="flex text-gray-600">
            <div class="p-2 w-8 flex-shrink-0" />
            <div class="p-2 w-8 flex-shrink-0" />
            <div class="p-2 w-full">Title</div>
            <div class="p-2 w-full">Artist</div>
            <div class="p-2 w-full">Album</div>
            <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
          </div>
          {#each songs as song}
            <SpotifySong {song} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-white border-b py-8">
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
    >
      Title
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div class="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink">
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            xGETTING STARTED
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            Lorem ipsum dolor sit amet.
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </a>
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-start">
          <button
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            xGETTING STARTED
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            Lorem ipsum dolor sit amet.
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </a>
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-center">
          <button
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full items-center justify-center md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
    >
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            xGETTING STARTED
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            Lorem ipsum dolor sit amet.
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </a>
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-end">
          <button
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  class="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 "
>
  <article
    class="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg"
  >
    <h5 class="font-bold text-base">Basic</h5>
    <h2 class="pb-4 flex justify-center font-bold border-b border-gray-300">
      <span class="text-3xl mt-6 mr-1">$</span><span class="text-6xl">
        199.99</span
      >
    </h2>
    <ul class="text-sm font-bold">
      <li class="pt-4 pb-4 border-b border-gray-300">500 GB Storage</li>
      <li class="pt-3 pb-4 border-b border-gray-300">2 Users Allowed</li>
      <li class="pt-4 pb-4 border-b border-gray-300">Send up to 3 GB</li>
    </ul>
    <button
      class=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md"
      style="background-image:linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%);"
    >
      Learn More
    </button>
  </article>
  <article
    class="lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg"
    style="background-image:linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%);"
  >
    <h5 class="font-bold text-base ">Professional</h5>
    <h2
      class="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"
    >
      <span class="text-3xl mt-6 mr-1">$</span><span class="text-6xl ">
        249.99</span
      >
    </h2>
    <ul class=" text-sm font-bold">
      <li class="pt-4 pb-4 border-b border-gray-200">1 TB Storage</li>
      <li class="pt-4 pb-4 border-b border-gray-200">5 Users Allowed</li>
      <li class="pt-4 pb-4 border-b border-gray-200">Send up to 10 GB</li>
    </ul>
    <button
      class="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-primary-blue"
    >
      Learn More
    </button>
  </article>
  <article
    class="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg"
  >
    <h5 class="font-bold text-base">Master</h5>
    <h2 class="flex justify-center pb-4 font-bold border-b border-gray-200">
      <span class="text-3xl mt-6 mr-1">$</span><span class="text-6xl"
        >399.99</span
      >
    </h2>
    <ul class="text-sm font-bold">
      <li class="pt-4 pb-4 border-b border-gray-200">2 TB Storage</li>
      <li class="pt-4 pb-4 border-b border-gray-200">10 Users Allowed</li>
      <li class="pt-4 pb-4 border-b border-gray-200">Send up to 20 GB</li>
    </ul>
    <button
      class="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light"
      style="background-image:linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%);"
    >
      Learn More
    </button>
  </article>
</section>
<!-- Change the colour #f8fafc to match the previous section colour -->
<svg
  class="wave-top"
  viewBox="0 0 1439 147"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
      <g class="wave" fill="#f8fafc">
        <path
          d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
        />
      </g>
      <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
        <g
          transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
        >
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            opacity="0.200000003"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
<section class="container mx-auto text-center py-6 mb-12">
  <h1
    class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
  >
    Call to Action
  </h1>
  <div class="w-full mb-4">
    <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
  </div>
  <h3 class="my-4 text-3xl leading-tight">
    Main Hero Message to sell yourself!
  </h3>
  <button
    class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
  >
    Action!
  </button>
</section>
<ContactForm />

<!--Testimonials-->
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
  <div class="w-full text-center pb-8">
    <svg
      class="mx-auto"
      width="48"
      height="42"
      viewBox="0 0 48 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6153 19.154H10.1537C9.38437 19.154 8.73037 18.8849 8.19185 18.3463C7.65363 17.8078 7.38417 17.154 7.38417 16.3845V15.4619C7.38417 13.4233 8.10546 11.6831 9.54795 10.2406C10.9903 8.79859 12.7309 8.0773 14.7693 8.0773H16.6153C17.1152 8.0773 17.5477 7.89453 17.9133 7.52929C18.2786 7.16384 18.4613 6.73131 18.4613 6.23128V2.53864C18.4613 2.03872 18.2785 1.60578 17.9133 1.24034C17.5478 0.875398 17.1153 0.692322 16.6153 0.692322H14.7693C12.7691 0.692322 10.8608 1.08212 9.04327 1.86059C7.22595 2.63958 5.65404 3.69257 4.32694 5.01967C2.99994 6.34616 1.94726 7.91817 1.16837 9.7357C0.389491 11.553 0 13.4618 0 15.4618V35.769C0 37.3083 0.538216 38.6152 1.61515 39.6926C2.69219 40.7693 4.00019 41.3076 5.53856 41.3076H16.616C18.1542 41.3076 19.4618 40.7693 20.539 39.6926C21.6157 38.6152 22.1542 37.3083 22.1542 35.769V24.6926C22.1542 23.1536 21.6157 21.8466 20.5383 20.7692C19.4616 19.6925 18.1535 19.154 16.6153 19.154Z"
        fill="#2865E9"
      />
      <path
        d="M46.3856 20.7692C45.309 19.6925 44.0013 19.154 42.4626 19.154H36.0011C35.2322 19.154 34.5776 18.8849 34.04 18.3463C33.5012 17.8078 33.2323 17.154 33.2323 16.3845V15.4619C33.2323 13.4233 33.9536 11.6831 35.3954 10.2406C36.8372 8.79859 38.5777 8.0773 40.6171 8.0773H42.4627C42.9627 8.0773 43.3955 7.89453 43.7608 7.52929C44.1258 7.16384 44.3092 6.73131 44.3092 6.23128V2.53864C44.3092 2.03872 44.1259 1.60578 43.7608 1.24034C43.3956 0.875398 42.9628 0.692322 42.4627 0.692322H40.6171C38.6158 0.692322 36.7079 1.08212 34.8899 1.86059C33.0729 2.63958 31.5015 3.69257 30.1744 5.01967C28.8473 6.34616 27.7941 7.91817 27.0155 9.7357C26.2368 11.553 25.8468 13.4618 25.8468 15.4618V35.769C25.8468 37.3083 26.3855 38.6152 27.4622 39.6926C28.5389 40.7693 29.8466 41.3076 31.3852 41.3076H42.462C44.0006 41.3076 45.3082 40.7693 46.3849 39.6926C47.4623 38.6152 47.9999 37.3083 47.9999 35.769V24.6926C48 23.1535 47.4623 21.8466 46.3856 20.7692Z"
        fill="#2865E9"
      />
    </svg>

    <h1
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2"
    >
      Find some testimonials about me
    </h1>

    <p class="text-gray-400 font-normal text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Dany Bailey</p>
          <p class="text-base text-blue-600 font-normal">Software Engineer</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
          <p class="text-base text-blue-600 font-normal">Graphic Designer</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Jade Bradley</p>
          <p class="text-base text-blue-600 font-normal">Dev Ops</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
          <p class="text-base text-blue-600 font-normal">Graphic Designer</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Dany Bailey</p>
          <p class="text-base text-blue-600 font-normal">Software Engineer</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6">
      <div class="flex items-center space-x-6 mb-4">
        <img
          class="h-28 w-28 object-cover object-center rounded-full"
          src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
          alt="photo"
        />
        <div>
          <p class="text-xl text-gray-700 font-normal mb-1">Jade Bradley</p>
          <p class="text-base text-blue-600 font-normal">Dev Ops</p>
        </div>
      </div>
      <div>
        <p class="text-gray-400 leading-loose font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</section>
<div class="max-w-4xl ml-auto mr-auto">
  <p>
    The Github repo for this blog is <a
      href="https://github.com/Dev-Logan-Bennett?tab=repositories"
      >💓 Courtesy of Logan Bennett</a
    >.
  </p>
</div>
<!--Footer-->
<footer class="bg-white">
  <div class="container mx-auto px-8">
    <div class="w-full flex flex-col md:flex-row py-6">
      <div class="flex-1 mb-6 text-black">
        <a
          class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg
            class="h-8 fill-current inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.005 512.005"
          >
            <rect
              fill="#2a2a31"
              x="16.539"
              y="425.626"
              width="479.767"
              height="50.502"
              transform="matrix(1,0,0,1,0,0)"
            />
            <path
              class="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg>
          LANDING
        </a>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Links</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >FAQ</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Help</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Support</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Terms</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Privacy</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Social</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Facebook</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Linkedin</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Twitter</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Company</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Official Blog</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >About Us</a
            >
          </li>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a
              href="#"
              class="no-underline hover:underline text-gray-800 hover:text-pink-500"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <a
    href="https://www.freepik.com/free-photos-vectors/background"
    class="text-gray-500">Website created by: Logan Bennett</a
  >
</footer>

<audio class="hidden" controls="controls">
  <source id="spotify" type="audio/mpeg" />
</audio>
