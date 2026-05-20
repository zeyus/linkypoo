<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';

	let { profile }: { profile: Props.Profile } = $props();
	let src: string | undefined = $state(undefined);
	// svelte-ignore state_referenced_locally
	if (profile.avatar.src) {
		src = profile.avatar.src;
	}
</script>

<section class="mb-8">
	<Heading tag="h2" class="font-jmb mb-4 text-center text-6xl font-bold"
		>{profile.name}: on the interwebs</Heading
	>
	<div class="w-full">
		<Img {src} alt={profile.avatar.alt || profile.name} class="mx-auto mb-4 size-96 rounded-full" />
	</div>
	<div class="w-full text-center text-lg">{profile.description}</div>
</section>
