const axios = require('axios');
const { getSession } = require('../envFunctions.js');

const vars = getSession();
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, AUTH_CODE } = vars;

const authBuffer = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  'base64'
);

exports.handler = async () => {
  const { data } = await axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: { Authorization: `Basic ${authBuffer}` },
    params: {
      grant_type: 'refresh_token',
      refresh_token: AUTH_CODE,
    },
  }).then(({ data: { access_token } }) =>
    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/artists/3wKauhRFdVE1QrZLV3XK04`,
      headers: { Authorization: 'Bearer ' + access_token },
    })
  );

  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
