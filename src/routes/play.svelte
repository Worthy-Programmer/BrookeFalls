<script>
  import { getSession } from '../envFunctions';
  import SpotifyWebApi from 'spotify-web-api-node';
  import Song from '../lib/Song.svelte';
  import axios from 'axios';
  import qs from 'qs';

  const vars = getSession();
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = vars;
  let songs = [];

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
    accessToken: `${access_token}`,
  });
</script>

<div>
  <Song {spotifyApi} />
</div>
