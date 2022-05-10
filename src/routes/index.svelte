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
</script>

<!-- <main class="bg-blue flex flex-col h-screen p-4">
	<header class="sticky h-48">
        <div class="font-bold text-yellow text-8xl flex justify-center sticky top-0">MNB</div>
    </header>
	<div class="grid gap-4 overflow-y-scroll">
		{#each videos as video}
			<div
				class="grid justify-center text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
			>
				<embed
					class="p-4 rounded-lg shadow-lg bg-yellow max-x-full max-y-full"
					src={video.url}
					title="Everytime You Go Away - Paul Young"
				/>
			</div>
		{/each}
	</div>
</main> -->
<div bind:this={box} on:scroll={parseScroll}>
	<div
		id="fake-header"
		class="bg-white sticky top-0 h-32 transform transition duration-500 origin-top"
	/>

	<header
		id="header"
		class="-mt-28 transition h-24 grid grid-flow-col items-center justify-between px-8 gap-8 sticky top-4 z-30 bg-white transform transition duration-500"
	>
		<p>Some text here</p>

		<img
			id="logo"
			class="h-10 transform scale-125 transition duration-500"
			src="./logo.svg"
			alt=""
		/>

		<p>Some text there</p>
	</header>
	<div class="grid gap-4 overflow-y-scroll bg-blue">
		{#each videos as video}
			<div
				class="grid justify-center text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
			>
				<embed
					class="p-4 rounded-lg shadow-lg bg-yellow max-x-full max-y-full"
					src={video.url}
					title="Everytime You Go Away - Paul Young"
				/>
			</div>
		{/each}
	</div>
</div>
