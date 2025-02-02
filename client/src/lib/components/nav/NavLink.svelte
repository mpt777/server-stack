<script>
  import { page } from '$app/state';
  
  let {title="", href, children=null} = $props();

  let url = $state(page);

  let classes = $derived.by(() => url.url.pathname == href ? "rounded preset-tonal" : "")
  
</script>

<a href="{href}"  class="anchor w-full px-2 py-1 rounded {classes} inline-block">
  {title}
  {#if children }
  {@render children()}
  {/if}
</a>