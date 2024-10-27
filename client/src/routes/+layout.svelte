<script>
     // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import "../app.css"
    import "$static/fonts/remix/remixicon.css"

	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<slot/>