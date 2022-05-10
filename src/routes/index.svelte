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
</script>

<main class="bg-blue flex flex-col h-screen p-4">
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
</main>
