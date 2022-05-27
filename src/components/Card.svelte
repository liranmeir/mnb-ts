<script lang="ts">
	export let url: string;
	export let publishedAt: string;
</script>

<div class="rounded-md shadow-md bg-yellow px-2 py-2">
	<iframe
		src={url}
		width="100%"
		height="100%"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<div>
		<h3 class="text-xl font-bold text-white">
			{new Date(publishedAt).toLocaleDateString('en-GB')}
		</h3>
	</div>
	<div class="h-10" />
</div>
