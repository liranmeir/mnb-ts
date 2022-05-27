import { google } from 'googleapis';
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLBVlVNrlatmo7qxiIY5uIr5taxl2wZ0jj';

const googleClient = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY
});

export const getPlaylistVideoIds = async () => {
	try {
		const res = await googleClient.playlistItems.list({
			part: ['contentDetails'],
			maxResults: 100,
			playlistId: PLAYLIST_ID
		});
		const videoIds = res?.data?.items?.map((item) => item?.contentDetails?.videoId) as string[];

		return videoIds;
	} catch (error) {
		console.log(error);
		return [];
	}
};
