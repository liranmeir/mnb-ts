<script lang="ts">
	export let url: string;
	export let publishedAt: string;
	let publishText = 'Published @ ' + new Date(publishedAt).toLocaleDateString('en-GB');
</script>

<div class="rounded-md shadow-md bg-yellow px-2 py-2 border-1 flex flex-col">
	<iframe
		class="flex"
		src={url}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<div class="text-xs text-white text-right pt-2">
		{publishText}
	</div>
</div>
