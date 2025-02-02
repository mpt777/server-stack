<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}

  let {_trigger, _content} = $props();
</script>

<!--
Tips for Drawer modals:
- Use `contentBase` to set styles, including height/width
- Set justify-start to align to the left
- Clear the align and padding styles
- Use `positionerClasses` to set the
- Set transition.x values that matches content width in pixels
-->

<Modal
	bind:open={drawerState}
	triggerBase="btn preset-tonal"
	contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[480px] h-screen"
	positionerJustify="justify-start"
	positionerAlign=""
	positionerPadding=""
	transitionsPositionerIn={{ x: -480, duration: 200 }}
	transitionsPositionerOut={{ x: -480, duration: 200 }}
>
	{#snippet trigger()}{@render _trigger()}{/snippet}
	{#snippet content()}{@render _content()}{/snippet}
</Modal>