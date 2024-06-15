import { getPlaylistVideosFromBoth } from './../googleService';
// import clipboard from 'clipboardy';
/** @type {import('./../types/Video').RequestHandler} */
export async function get() {
	const playlistVideos = await getPlaylistVideosFromBoth();

	// Copy sortedVideos to clipboard
	// const clipboardVideos = playlistVideos.map(({ id, ...rest }) => ({
	// 	...rest,
	// 	youtubeVideoId: id
	// }));
	// clipboard.writeSync(JSON.stringify(clipboardVideos));
	// console.log(clipboardVideos);
	const videos = playlistVideos.map(({ id, ...rest }) => ({
		...rest,
		url: `https://www.youtube.com/embed/${id}?autoplay=0&modestbranding=1&showinfo=0&color=white`
	}));

	const sortedVideos = videos.sort((a, b) => {
		const aDate = new Date(a.publishedAt);
		const bDate = new Date(b.publishedAt);

		return bDate.getTime() - aDate.getTime();
	});

	return {
		body: { videos: sortedVideos }
	};
}
