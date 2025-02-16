<script lang="ts">
    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
   import "../app.css"
   

   // import { initializeStores } from '@skeletonlabs/skeleton';

   // import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
   // import { storePopup } from '@skeletonlabs/skeleton';
   // storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

   // initializeStores();

   import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
   let {children} = $props();
 </script>
 
<ToastProvider placement={"top-end"}>
   {@render children()}
</ToastProvider>