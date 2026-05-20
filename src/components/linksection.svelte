<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { default as LinkItem } from './linkitem.svelte';
	import { List, Li, Heading, Img } from 'flowbite-svelte';

	let {
		sectionTitle,
		links,
		sectionImage = undefined
	}: {
		sectionTitle: string;
		links: Props.Link[];
		sectionImage?: HTMLImgAttributes;
	} = $props();

	// svelte-ignore state_referenced_locally
	if (sectionImage?.src === null) {
		sectionImage = undefined;
	}
</script>

<section class="mb-8 rounded-xl bg-purple-900/25 p-8">
	<Heading tag="h2" class="font-jmb mb-8 text-center text-6xl text-pink-500">{sectionTitle}</Heading
	>
	{#if sectionImage}
		{{
			/** @ts-ignore */
		}}
		<Img {...sectionImage} class="mb-4" />
	{/if}
	<List>
		{#each links as link}
			<Li class="mx-auto mb-4 max-w-4xl min-w-min p-0">
				<LinkItem {link} />
			</Li>
		{/each}
	</List>
</section>
