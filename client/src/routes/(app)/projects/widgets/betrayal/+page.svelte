<script>
	function BiggerElements(val)
		{
			return function(evalue, index, array)
			{
			return (evalue >= val);
			};
		}

	function SmallerElements(val)
		{
			return function(evalue, index, array)
			{
			return (evalue <= val);
			};
		}
	
	function SameElements(val)
		{
			return function(evalue, index, array)
			{
			return (evalue == val);
			};
		}

	let diceCount = $state(0);
	let interest = $state(0);
	let result = $state(0.0);

	let probabilityType = $state('2');

	const simulations = 10000;

	function calculate() {
		let total_list = []
		for(var i=0; i < simulations; i++) {
			let total = 0
			for(var j = 0; j < diceCount; j++)
			{
				total += Math.floor(Math.random() * 3);
			}
			total_list.push(total)
		}  

		/*gte than or equal to*/
		if (probabilityType == "0") {
			result = total_list.filter(BiggerElements(interest)).length / total_list.length 
		}

		/* greater than */
			if (probabilityType == "1") {
			result = 1 - ( total_list.filter(SmallerElements(interest)).length / total_list.length ) 
		}

		/*exact role */
		if (probabilityType == "2") {
			result = total_list.filter(SameElements(interest)).length / total_list.length 
		}

		/*less than role */
		if (probabilityType == "3") {
			result = 1 - ( total_list.filter(BiggerElements(interest)).length / total_list.length )
		}

		/*less than or equal to*/
		if (probabilityType == "4") {
			result = total_list.filter(SmallerElements(interest)).length / total_list.length 
		}

		
			
	}

</script>
<div class="flex justify-center">
	<div class="card bg-initial max-w-4xl">
		<header class="card-header">
			<h2 class="h2">
				Betrayal Probability Calculator 
			</h2>
		</header>
		
		<section class="p-4">Select the number of dice in play, the value of interest, and the type of probability.</section>
		<section class="p-4 space-y-4">

			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">Dice Rolled</div>
				<input type="number" min=0 value="{diceCount}"/>

				<div class="input-group-shim !p-0">
					<div class="flex !p-0 h-full">
						<button class="h-full variant-filled-error" on:click={() => diceCount = Math.max(diceCount-1, 0)}>-</button>
						<button class="h-full variant-filled-success" on:click={() => diceCount++}>+</button>
					</div>
				</div>
			</div>

			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">Value of Interest</div>
				<input type="number" min=0 value="{interest}"/>

				<div class="input-group-shim !p-0">
					<div class="flex !p-0 h-full">
						<button class="h-full variant-filled-error" on:click={() => interest = Math.max(interest-1, 0)}>-</button>
						<button class="h-full variant-filled-success" on:click={() => interest++}>+</button>
					</div>
				</div>
			</div>

			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">Probability</div>

				<select class="select" bind:value={probabilityType}>
					<option value="0">Greater Than or Equal</option>
					<option value="1">Greater Than</option>
					<option value="2">Equal</option>
					<option value="3">Less Than</option>
					<option value="4">Less Than or Equal</option>
				</select>

			</div>

			<div class="btn-group">
				<button class="variant-filled-tertiary" on:click={calculate}>
					Result
				</button>
				<input type="number" min=0 value="{result.toFixed(2)}" disabled/>
			</div>

		</section>
		<hr>
		<footer class="card-footer p-4"><a href="/projects" class="anchor">Return</a></footer>
	</div>
</div>