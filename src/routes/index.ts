/** @type {import('./../types/Video').RequestHandler} */
export async function get() {
	// TODO: make request to youtube api
	const vid = {
		url: 'https://www.youtube.com/embed/trggwXMMsYw?autoplay=0'
	};
	const videos = new Array(10).fill(vid);

	return {
		body: { videos }
	};
}
