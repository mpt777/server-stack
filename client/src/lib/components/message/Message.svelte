<script>
  let { message, level } = $props();
</script>

{#if message}
<div class="p-4 rounded preset-filled-{level}-500">
  {message}
</div>
{/if }