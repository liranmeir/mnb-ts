import { getPlaylistVideoIds } from './../googleService';

/** @type {import('./../types/Video').RequestHandler} */
export async function get() {
	const ids = await getPlaylistVideoIds();

	const videos = ids.map((id) => ({
		url: `https://www.youtube.com/embed/${id}?autoplay=0`
	}));

	return {
		body: { videos }
	};
}
