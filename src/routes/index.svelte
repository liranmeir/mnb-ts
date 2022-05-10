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

	/**
	 * @type {HTMLDivElement}
	 */
	let box;
	let yScroll = 0;

	function parseScroll() {
		debugger;
		yScroll = box.scrollTop;
	}
	// const header = document.querySelector('#header');
	// const fakeHeader = document.querySelector('#fake-header');
	// const logo = document.querySelector('#logo');

	// window.addEventListener('scroll', () => {
	// 	if (window.scrollY > 64) {
	// 		header.classList.add('-translate-y-4');
	// 		logo.classList.remove('scale-125');

	// 		fakeHeader.classList.add('scale-y-75');
	// 		fakeHeader.classList.add('shadow-xl');
	// 		return;
	// 	}

	// 	header.classList.remove('-translate-y-4');
	// 	logo.classList.add('scale-125');

	// 	fakeHeader.classList.remove('scale-y-75');
	// 	fakeHeader.classList.remove('shadow-xl');
	// });

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
<div class="grid gap-4 overflow-y-scroll bg-blue">
	{#each videos as video}
		<div
			class="grid justify-center text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
		>
			<iframe
				class="p-2 rounded-md shadow-lg bg-yellow"
				src={video.url}
				width="100%"
				height="100%"
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
