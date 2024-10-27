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
	<div class="card bg-initial max-w-4xl overflow-hidden">
		<header class="card-header p-4 bg-surface-200-700-token ">
			<h2 class="h2">
				Ticket to Ride Calculator
			</h2>
		</header>
		<hr>
		
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
				<button class="variant-glass-secondary backdrop-filter-none btn-lg border-r border-secondary-500" onclick={calculate}>
					<i class="ri-calculator-line"></i> Results 
				</button>
				<button>{result}</button>
			</div>

		</section>
		<hr>
		<footer class="card-footer p-4 "><a href="/projects" class="btn variant-ghost"><i class="ri-arrow-left-line"></i> Return</a></footer>
	</div>
</div>