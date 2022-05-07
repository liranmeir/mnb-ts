<script>
	const videos = [
		{
			title: 'Everytime You Go Away',
			artist: 'Paul Young',
			thumbnail: 'https://i.ytimg.com/vi/nfk6sCzRTbM/hqdefault.jpg',
			url: 'https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1',
			duration: '03:00',
			genre: 'Pop',
			year: '2019',
			rating: '4.5',
			description:
				'Everytime You Go Away is a song by American singer-songwriter Paul Young. The song was released on December 12, 2019, through his own label, Epic Records.'
		}
	];
</script>

<main class="bg-blue h-screen grid grid-cols-1 justify-center px-8 py-8">
	<div class="font-bold text-yellow text-8xl flex justify-center">MNB</div>
	{#each videos as video}
		<div
			class="grid gap-4 justify-center text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg"
		>
			<embed
				class="p-4 rounded-lg shadow-lg bg-yellow max-x-full max-y-full"
				src={video.url}
				title="Everytime You Go Away - Paul Young"
			/>
		</div>
	{/each}
</main>
