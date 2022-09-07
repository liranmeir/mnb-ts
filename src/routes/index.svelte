<script lang="ts">
	import type { Video } from 'src/types/Video';

	import Card from '../components/Card.svelte';
	import Layout from './__layout.svelte';

	export let videos: Video[] = [];

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<header
	class:-translate-y-4={y > 64}
	class="h-20 grid grid-flow-col items-center justify-between px-8 gap-8 sticky top-0 bg-white transform transition duration-500"
>
	<!-- <a href="/picker">Player Picker</a> -->

	<img
		class:-translate-x-0={y > 64}
		id="logo"
		class="h-10 transform scale-100 transition duration-500"
		class:scale-75={y > 64}
		src="./logo.svg"
		alt=""
	/>
</header>

<div class="grid gap-8 overflow-y-scroll bg-blue p-4 pt-4 grid-cols-1 md:grid-cols-3">
	{#each videos as video}
		<Card {...video} />
	{/each}
</div>
