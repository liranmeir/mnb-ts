<script lang="ts">
	export let url: string;
	export let publishedAt: string;
	export let videoNumber: number;
	let publishText = 'Published @ ' + new Date(publishedAt).toLocaleDateString('en-GB');
</script>

<div class="rounded-md shadow-md bg-yellow px-2 py-2 border-1 flex flex-col">
	<iframe
		loading="lazy"
		class="flex"
		src={url}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<div class="flex justify-between align-center mt-2">
		<div class="text-xs text-white text-right pt-2">{publishText}</div>
		<span
			class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
			>Vid#{videoNumber}</span
		>
	</div>
</div>
