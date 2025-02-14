<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="container mx-auto my-8 rounded-3xl bg-black/75 shadow-2xl p-8">
	{@render children()}
</div>
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
