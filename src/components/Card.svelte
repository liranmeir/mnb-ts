<script lang="ts">
	export let url: string;
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
	<div class="h-10" />
</div>
