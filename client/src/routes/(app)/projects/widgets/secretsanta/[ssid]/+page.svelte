<script>
	import { url } from '$utils/url.js';

	export let data;

	let inputedName = ""
	let giftee = "";

	const lookup = Object.fromEntries(
		Object.entries(data.pairs_str).map(([k, v]) => [k.toLowerCase(), v])
	);


	function findGiftee() {
		let name = inputedName.toLocaleLowerCase()
		if (name in lookup) {
			giftee = lookup[name]
		} else {
			giftee = "Not Found"
		}
		
	}

</script>
<div class="flex justify-center">
	<div class="calyps--card">
		<header class="card-header p-4 bg-surface-200-700-token ">
			<h2 class="h2">
				Secret Santa
			</h2>
		</header>
		<hr>
		
		<section class="p-4">Welcome to Secret Santa: {data.name}</section>
		<section class="p-4">Please enter your name (case insesitive) to reveal who will be your giftee!</section>
		<section class="p-4 space-y-4">

			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">Your Name</div>
				<input type="text" class="input--min-w-4" bind:value={inputedName}/>
				<button class="h-full variant-filled-tertiary" onclick="{() => findGiftee()}">Find!</button>
			</div>

			<div class="flex justify-center">
				<div class="text-center">
					<div>Your Giftee</div>
					<div class="text-5xl h-[4rem]">{giftee}</div>
					<div></div>
				</div>
			</div>


		</section>
		<hr>
		<footer class="card-footer p-4 flex justify-between">
			<div>
			</div>
				<a href="{url("projects")}" class="btn variant-ghost float-right"><i class="ri-arrow-left-line"></i> Return</a>
		</footer>
	</div>
</div>