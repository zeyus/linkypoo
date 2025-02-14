<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";
    import { default as LinkItem } from "./linkitem.svelte";
    import { List, Li, Heading, Img } from "flowbite-svelte";

    let { sectionTitle, links, sectionImage = undefined}: {
        sectionTitle: string,
        links: Props.Link[],
        sectionImage?: HTMLImgAttributes,
    } = $props();

    if (sectionImage?.src === null) {
        sectionImage = undefined;
    }

</script>

<section class="mb-8 rounded-xl bg-purple-900/25 p-8">
    <Heading tag="h2" class="text-center mb-8 text-6xl font-jmb text-pink-500">{sectionTitle}</Heading>
    {#if sectionImage}
        {{/** @ts-ignore */}}
        <Img {...sectionImage} class="mb-4" />
    {/if}
    <List>
        
        {#each links as link}
            <Li class="min-w-min max-w-4xl mx-auto p-0 mb-4">
                <LinkItem {link} />
            </Li>
        {/each}
    </List>
</section>
