<script>
	import Card from '../components/Card.svelte';
	import Layout from './__layout.svelte';
	const vid = {
		url: 'https://www.youtube.com/embed/trggwXMMsYw?autoplay=0'
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
	class="-mt-28 h-28 grid grid-flow-col items-center justify-between px-8 gap-8 sticky top-4 z-30 bg-white transform transition duration-500"
>
	<a href="/picker">Player Picker</a>

	<img id="logo" class="h-10 transform scale-125 transition duration-500" src="./logo.svg" alt="" />
</header>

<div />
<div class="grid gap-8 overflow-y-scroll bg-blue px-4">
	{#each videos as video}
		<Card {...video} />
	{/each}
</div>
