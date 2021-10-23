import { Buffer } from 'buffer';

// Fetching ENV from root dir: VITE Replaces these with actual values while compiling
const env = {
	clientId: import.meta.env.VITE_CLIENT_ID,
	clientSecret: import.meta.env.VITE_CLIENT_SECRET,
};

const authBuffer = Buffer.from(`${env.clientId}:${env.clientSecret}`).toString(
	'base64'
);

export async function get() {
	// Getting access token
	const params = new URLSearchParams({
		grant_type: 'client_credentials',
	});

	const { access_token: accessToken } = await (
		await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			body: params,
			headers: {
				Authorization: `Basic ${authBuffer}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
	).json();

	const artistData = await (
		await fetch('https://api.spotify.com/v1/artists/3wKauhRFdVE1QrZLV3XK04', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
	).json();

	const songData = await (
		await fetch(
			'https://api.spotify.com/v1/artists/3wKauhRFdVE1QrZLV3XK04/top-tracks?market=US',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
	).json();

	https: return {
		status: 200,
		artistData,
		songData,
		headers: {
			'Content-Type': 'application/json',
		},
	};
}
