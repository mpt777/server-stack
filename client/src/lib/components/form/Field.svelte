<script>
  // @ts-nocheck
    let {value="", placeholder="", label="", name, forName="", autocomplete="", required=false, choices=[], constraints=[], type="text", css="", baseClass=undefined, form=undefined} = $props();
      import Input from "./Input.svelte";
      import Errors from "./Errors.svelte";
  
    let errors = $derived(form?.errors);

    let requiredClass = required ? "required" : ""; 
    let hasErrors = errors && errors[name];
    let classes = hasErrors ? "with-error" : "";

  </script>
  
  
  <label class="label" for="{name || forName}">
      {#if label}
          <span class="label-text {requiredClass}">{label}</span>
      {/if}
      
      <slot name="input">
          {#if name}<Input bind:value={value} placeholder={placeholder} name={name} autocomplete={autocomplete} type={type} classes={classes} required={required} baseClass={baseClass} {...constraints} choices={choices} css={css}/>{/if}
      </slot>
      <slot name="error">
          {#if errors?.[name]}<Errors error="{errors?.[name]}" />{/if}
      </slot>
  </label>