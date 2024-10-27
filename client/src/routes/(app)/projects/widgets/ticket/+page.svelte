<script>
  let trains = [
    { "name": 1, "value": 1, "count": 0 },
    { "name": 2, "value": 2, "count": 0 },
    { "name": 3, "value": 4, "count": 0 },
    { "name": 4, "value": 7, "count": 0 },
    { "name": 5, "value": 10, "count": 0 },
    { "name": 6, "value": 15, "count": 0 }
  ];

  let result = 0; // Initialize result

  function calculate() {
    result = 0; // Reset result before calculating
    trains.forEach(e => {
      result += (e.value * e.count);
    });
  }
</script>

<div class="flex justify-center">
	<div class="card bg-initial max-w-4xl">
		<header class="card-header">
			<h2 class="h2">
				Ticket to Ride Calculator
			</h2>
		</header>
		
		<section class="p-4">Enter the number of segments based on their length down below..</section>
		<section class="p-4 space-y-4">
			{#each trains as train}
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">{train.name} Segment</div>
					<input type="number" class="input--min-w-4" min=0 value={train.count}/>

					<div class="input-group-shim !p-0">
						<div class="flex !p-0 h-full">
							<button class="h-full variant-filled-error" onclick={() => train.count = Math.max(train.count-1, 0)}>-</button>
							<button class="h-full variant-filled-success" onclick={() => train.count++}>+</button>
						</div>
					</div>
				</div>
			{/each}

			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<button class="variant-filled-tertiary btn-lg" onclick={calculate}>
					Result
				</button>
				<button>{result}</button>
			</div>

		</section>
		<hr>
		<footer class="card-footer p-4 "><a href="/projects" class="anchor">Return</a></footer>
	</div>
</div>