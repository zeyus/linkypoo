<script lang="ts">
    	import type { PageProps } from './$types';
        import { default as LinkSection } from '../components/linksection.svelte';
        import { default as Profile } from '../components/profile.svelte';

        let { data }: PageProps = $props();

        let orderedSections = Object.entries(data.linkSections).sort((a, b) => a[1].weight - b[1].weight);
        let definedSections = Object.keys(data.linkSections);
        // generate a list of links for each section
        let links: Record<string, Props.Link[]> = $state({
            "uncategorized": [],
        });
        for (let lnk of data.linkItems) {
            if (!("section" in lnk) || typeof lnk.section !== "string" || !definedSections.includes(lnk.section)) {
                links["uncategorized"].push(lnk);
            } else {
                if (links[lnk.section] === undefined) {
                    links[lnk.section] = [];
                }
                links[lnk.section].push(lnk);
            }
        }

        let profile = data.profile;
</script>

<Profile {profile} />

{#each orderedSections as [sectionName, section]}
    {#if sectionName in links && links[sectionName].length > 0}
        <LinkSection
            sectionTitle={section.title}
            links={links[sectionName]}
            sectionImage={section.image}
        />
    {/if}
{/each}
