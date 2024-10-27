<script>
	let data = [
		{url:"projects/widgets/betrayal", title:"Betrayal Probability", description:`Not feeling lucky?<br><br>
			Input the number of dice you are rolling as well as the total number that you are hoping to achieve.<br><br>
			Then select how you want that probability to be calculated. You might want to rethink your risky roll`},
		{url:"projects/widgets/ticket", title:"Ticket to Ride", description:`Do you hate calculating your score in Ticket to Ride?<br><br>
			Input the number of train segments per size and calculate your total with ease.<br><br>
			Simply add this total to the value of your tickets to get your final score in this great game.`},
		{url:"projects/widgets/tato", title:"Tato's Grand Adventure", description:`Play as Tato in this 2d platformer! Travel over numerous levels to collect each of the spell plates. Dodge the evil blue cubes and put an end to Nature's Wrath.<br><br>
			Tato's Adventure is a 2d platformer written in plain JavaScript and HTML5. This was my first exposer in game development, and the project that started my love of development.<br><br>
			*No Mobile Support*<br>
			*No High Refresh Monitor Support*<br>`},	
	]

</script>

<div class="w-full text-token grid grid-cols-1 md:grid-cols-3 gap-4">
	
	{#each data as d}
		<a href="{d.url}" class="card max-w-4xl overflow-hidden bg-surface-50-900-token shadow-md">
			<header class="card-header p-4 bg-surface-200-700-token">
				<h2 class="h2">{d.title}</h2>
			</header>
			<section class="p-4 ">
				{@html d.description}
			</section>
		</a>
	{/each}

</div>