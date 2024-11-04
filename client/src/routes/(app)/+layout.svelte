<script>
	import { AppShell, AppBar, Drawer, Toast, Avatar, Modal} from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Navigation from '$components/nav/Navigation.svelte';
	// import ToastMessage from '$components/messages/ToastMessage.svelte';
	import { browser } from '$app/environment';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	// import Input from '$components/form/Input.svelte';

	import { getDrawerStore } from "@skeletonlabs/skeleton";
	import { popup } from '@skeletonlabs/skeleton';
	
	// import type { PopupSettings } from '@skeletonlabs/skeleton';
	// import Breadcrumb from '$components/utils/Breadcrumb.svelte';

	const drawerStore = getDrawerStore();

	function drawerOpen() {
		drawerStore.open();
	}

	$: breadcrumbs = $page.data.breadcrumbs || [];
</script>

<svelte:head>
	<title>Calyps.io</title>
</svelte:head>

<Drawer>
	<Navigation />
</Drawer>

<Toast position="tr" />
<Modal />

{#if browser}
<!-- <ToastMessage /> -->
{/if }

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="bg-surface-100-800-token p-4 shadow-md z-10">
		<div class="flex justify-between">
		  <div class="h4"><a href="/">Calyps.io</a></div>
		  <div class="flex gap-1">
				<a class="cursor-pointer" on:click={drawerOpen}>
					<i class="text-xl ri-menu-line" ></i>
				</a>
				<LightSwitch/>
			</div>
		</div>
	</header>
	<!-- Grid Columns -->
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
	  <!-- Left Sidebar. -->
	  <aside class="p-1 bg-surface-100-800-token hidden md:block border-r border-surface-500/30">
      <Navigation/>
    </aside>
	  <!-- Main Content -->
    <div class="flex justify-between flex-col">
      <main class="space-y-4 p-4">
        <slot></slot>
      </main>
      <footer class="p-4 bg-surface-500/20">
        <div class="flex justify-between">
          <div></div>
          <div class="text-xl">

						<div class="card text-center p-4 shadow-xl text-sm" data-popup="popupHover">
							<div><p>View the Legacy <br>Emptytxt.com</p></div>
							<div class="arrow bg-surface-100-800-token" />
						</div>
						
							<a href="https://emptytxt.com" use:popup={{
								event: 'hover',
								target: 'popupHover',
								placement: 'top'
							}}>
								<img src="/favicon.ico" class="inline w-4 pb-1" alt="emptytx logo">
							</a>

						<a href="https://www.youtube.com/@mpt777">
              <i class="ri-youtube-fill"></i>
            </a>

            <a href="https://github.com/mpt777">
              <i class="ri-github-fill"></i>
            </a>
          </div>
        </div>
	    </footer>
    </div>

	</div>
	
</div>
