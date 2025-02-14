<script lang="ts">
    import { Heading,Img } from "flowbite-svelte";

    let { profile }: { profile: Props.Profile } = $props();
    let src: string | undefined = $state(undefined);
    if (profile.avatar.src) {
        src = profile.avatar.src;
    }
</script>

<section class="mb-8">
    <Heading tag="h2" class="mb-4 text-6xl text-center font-bold font-jmb">{profile.name}: on the interwebs</Heading>
    <Img {src} alt={profile.avatar.alt || profile.name} class="mb-4 rounded-full mx-auto size-96" />
    <div class="text-lg text-center w-100">{profile.description}</div>
</section>
