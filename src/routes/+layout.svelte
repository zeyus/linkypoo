<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	let { children }: { children: any } = $props();
	let pageMetadata = $derived(page.data.pageMetadata as Props.PageMetadata | undefined);
</script>
<div class="container mx-auto my-8 rounded-3xl bg-black/75 shadow-2xl p-8">
	{@render children()}
</div>
<footer class="bg-neutral-950/50 text-white text-center py-8">
	<div class="container mx-auto flex flex-row items-center justify-center">
		{#if pageMetadata?.showCopyright}
			<p class="text-sm">&copy; {pageMetadata?.copryrightYear ?? new Date().getFullYear()}
				{#if pageMetadata?.copyrightHolderUrl}
					<a href={pageMetadata.copyrightHolderUrl} class="text-pink-500 underline"> {pageMetadata?.copyrightHolder ?? pageMetadata?.title}</a>
				{:else}
					 {pageMetadata?.copyrightHolder ?? pageMetadata?.title}
				{/if}
				&nbsp;&mdash;
			</p>
		{/if}
		{#if pageMetadata?.footer}
			<p class="text-sm">&nbsp;{@html pageMetadata.footer} &nbsp;&mdash;</p>
		{/if}
		<p class="text-sm">&nbsp;Generated with <a href="https://github.com/zeyus/linkypoo" class="text-pink-500 underline">Linkypoo</a></p>
	</div>
</footer>
<div id="space" class="bg-neutral-950">
	<div class="stars"></div>
	<div class="stars"></div>
	<div class="stars"></div>
	<div class="stars"></div>
	<div class="stars"></div>
</div>
<style>
	#space, .stars {
		overflow: hidden;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.stars {
		background-image: 
			radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
			radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
			radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
			radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
			radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
			radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
		background-repeat: repeat;
		background-size: 200px 200px;
		animation: zoom 40s infinite;
		opacity: 0;
	}

	.stars:nth-child(1) {
		background-position: 50% 50%;
		animation-delay: -8s;
	}
	.stars:nth-child(2) {
		background-position: 20% 60%;
		animation-delay: 0s;
	}
	.stars:nth-child(3) {
		background-position: -20% -30%;
		animation-delay: 8s;
	}
	.stars:nth-child(4) {
		background-position: 40% -80%;
		animation-delay: 16s;
	}
	.stars:nth-child(5) {
		background-position: -20% 30%;
		animation-delay: 24s;
	}

	@keyframes zoom {
		0% {
			opacity: 0;
			transform: scale(0.5);
			animation-timing-function: ease-in;
		} 
		85% {
			opacity: 1;
			transform: scale(2.8);
			animation-timing-function: linear;
		}
		100% {
			opacity: 0;
			transform: scale(3.5);
		}
	}
</style>
<svelte:head>
	<title>{pageMetadata?.title ?? 'Linkypoo'}</title>
	<meta name="description" content={pageMetadata?.description ?? ''} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>