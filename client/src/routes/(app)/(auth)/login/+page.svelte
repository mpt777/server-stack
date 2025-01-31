<script lang="ts">
    let { data, form } = $props();

    import { url } from "$utils/url";
    import { enhance } from '$app/forms';
    import Field from '$components/form/Field.svelte';
    import Message from '$components/message/Message.svelte';

</script>
<form method="POST" use:enhance>
	<div class="flex justify-center">
		
		<div class="calyps--card">
			<header class="card-header p-4 bg-surface-200-700-token ">
				<h2 class="h2">
					Login
				</h2>
			</header>
			<hr>

			<section class="p-4 space-y-4">
				<Message message={ form?.message } level={form?.level}/>
				<div class="space-y-4">
					<Field name="username" placeholder="Username" label="Username" autocomplete="username" required={true}/>
					<Field name="password" placeholder="Password" label="Password" autocomplete="new-password" required={true} type="password"/>
				</div>

			</section>
			<hr>
			<footer class="card-footer p-4 flex justify-between">
					<button class="btn variant-filled-primary" type="submit" >Login</button>
		
					<div>
							<a href="/auth/forgot-password" class="btn variant-ghost btn-sm">
									Forgot Password
							</a>
							<a href="/auth/signup" class="btn variant-ghost btn-sm">
									Sign Up
							</a>
					</div>

					{#if form?.success }
					<p class="error">Success Loging In!.</p>
					{/if }
			</footer>
		</div>

	</div>
</form>