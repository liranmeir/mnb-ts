import { google } from 'googleapis';
import type { Video } from './types/Video';
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID_ASI = 'PLBVlVNrlatmo7qxiIY5uIr5taxl2wZ0jj';
const PLAYLIST_ID_LIRAN = 'PLP8LSvMsAefhDPSeWUFJHYlwgOB0yXI-1';

const googleClient = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY
});

const getPlaylistVideos = async (playlistId: string) => {
	try {
		const res = await googleClient.playlistItems.list({
			part: ['snippet', 'contentDetails'],
			maxResults: 100,
			playlistId
		});
		const videos = res?.data?.items?.map((item) => ({
			id: item?.contentDetails?.videoId,
			title: item?.snippet?.title,
			description: item?.snippet?.description,
			publishedAt: item?.snippet?.publishedAt
		})) as Video[];

		return videos;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getPlaylistVideosFromBoth = async () => {
	const [asiVideos, liranVideos] = await Promise.all([
		getPlaylistVideos(PLAYLIST_ID_ASI),
		getPlaylistVideos(PLAYLIST_ID_LIRAN)
	]);

	return asiVideos.concat(liranVideos);
};
