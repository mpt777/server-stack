<script lang="ts">

	let darkMode = $state(true);

	function toggleDarkMode() {
		darkMode = !darkMode;
		darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	}
</script>

<button class="btn btn-icon preset-outlined-surface-200-800 hover:preset-tonal" onclick={toggleDarkMode}>
	{#if darkMode}
	<i class="ri-moon-line"></i>
	{:else }
	<i class="ri-sun-line"></i>
	{/if }
</button>