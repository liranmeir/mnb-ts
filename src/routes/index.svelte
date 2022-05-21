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

<header
	class:-translate-y-4={y > 64}
	class="h-20 grid grid-flow-col items-center justify-between px-8 gap-8 sticky top-0 bg-white transform transition duration-500"
>
	<a href="/picker">Player Picker</a>

	<img
		id="logo"
		class="h-10 transform scale-100 transition duration-500"
		class:scale-75={y > 64}
		src="./logo.svg"
		alt=""
	/>
</header>

<div class="grid gap-8 overflow-y-scroll bg-blue p-4 pt-4">
	{#each videos as video}
		<Card {...video} />
	{/each}
</div>
