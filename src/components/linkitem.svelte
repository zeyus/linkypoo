<script lang="ts">
    import { A } from "flowbite-svelte";
    import { IconSolid } from 'flowbite-svelte-icons';
    import Youtube from 'flowbite-svelte-icons/YoutubeSolid.svelte';
    import Github from 'flowbite-svelte-icons/GithubSolid.svelte';
    import Envelope from 'flowbite-svelte-icons/EnvelopeSolid.svelte';
	import type { Component } from "svelte";
        
    let { link }: { link: Props.Link } = $props();
    const iconComponents = { Youtube, Github, Envelope };
    const availableIcons = Object.keys(iconComponents);
    const icons = Object.entries(iconComponents);

    const iconIndex = "linkIcon" in link && typeof link.linkIcon !== "undefined" ? availableIcons.indexOf(link.linkIcon) : -1;
    const iconSolidIndex = "linkIcon" in link && typeof link.linkIcon !== "undefined" ? availableIcons.indexOf(link.linkIcon + "Solid") : -1;
    let icon = $state<Component | null>(null);
    let iconSvg: string | null = $state(null);
    if (link.linkIconSvg && link.linkIcon !== undefined) {
        iconSvg = link.linkIcon;
    } else {
        if (iconIndex !== -1) {
            // @ts-ignore we know the component type matches, it's unnecessarily complex to include the type variants here
            icon = icons[iconIndex][1];
        } else if (iconSolidIndex !== -1) {
            // @ts-ignore we know the component type matches, it's unnecessarily complex to include the type variants here
            icon = icons[iconSolidIndex][1];
        }
    }

    const iconConfig: { size: "md" | "xs" | "sm" | "lg" | "xl" | undefined, color: string, ariaLabel: string } = {
        size: "lg",
        color: link.color || '#fff',
        ariaLabel: "", // @TODO
    };

</script>

<svelte:head>
    {#if link.linkAttrs.href !== undefined && link.me}
        <link rel="me" href={link.linkAttrs.href} />
    {/if}
</svelte:head>

<A href={link.linkAttrs.href || undefined} class="rounded-xl bg-slate-700 p-4 w-full flex flex-row items-center justify-center hover:bg-slate-600 shadow-2xl">
    {#if icon !== null}
        <span class="mr-2 size-8"><IconSolid Icon={icon} {...iconConfig} /></span>
    {/if}
    {#if iconSvg !== null}
        <span class="mr-2 size-8" style="color:{link.color || '#fff'}">{@html iconSvg}</span>
    {/if}
    <span class="text-lg">{link.linkText}</span>
</A>
