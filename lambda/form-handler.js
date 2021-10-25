const querystring = require('querystring');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  return {
    body: JSON.stringify(body),
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
