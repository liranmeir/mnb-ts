<script>
	const vid = {
		title: 'Everytime You Go Away',
		artist: 'Paul Young',
		thumbnail: 'https://i.ytimg.com/vi/nfk6sCzRTbM/hqdefault.jpg',
		url: 'https://www.youtube.com/embed/trggwXMMsYw?autoplay=0',
		duration: '03:00',
		genre: 'Pop',
		year: '2019',
		rating: '4.5',
		description:
			'Everytime You Go Away is a song by American singer-songwriter Paul Young. The song was released on December 12, 2019, through his own label, Epic Records.'
	};
	const videos = new Array(10).fill(vid);

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div
	class:scale-y-75={y > 64}
	class:shadow-xl={y > 64}
	class="bg-white sticky top-0 h-32 transform transition duration-500 origin-top"
/>

<header
	class:-translate-y-4={y > 64}
	class="-mt-28 transition h-24 grid grid-flow-col items-center justify-between px-8 gap-8 sticky top-4 z-30 bg-white transform transition duration-500"
>
	<p>Some text here</p>

	<img id="logo" class="h-10 transform scale-125 transition duration-500" src="./logo.svg" alt="" />

	<p>Some text there</p>
</header>
<div class="grid gap-8 overflow-y-scroll bg-blue px-4">
	{#each videos as video}
		<div class="aspect-w-16 aspect-h-9 rounded-md shadow-lg bg-yellow">
			<iframe
				src={video.url}
				width="90%"
				height="90%"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	{/each}
</div>

<style>
	.shrink {
	}
</style>
