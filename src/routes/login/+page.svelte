<script lang="ts">
  import darkMode from "$lib/stores/darkMode";
  import { onMount } from "svelte";
  import { missing_component } from "svelte/internal";
  import { themeChange } from "theme-change";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Welcome Back!</h1>
      <p class="py-6">
        Log into your account or <a
          class="link link-primary"
          href="https://duck.com">sign up.</a
        >
      </p>
      <div class="mt-5">
        <button class="btn  btn-primary"
          ><img
            alt="ms_logo"
            style="width:2.5ch"
            src="https://microsoft.com/favicon.ico"
          />Login with Microsoft</button
        >
        <button class="btn  btn-primary"
          ><img
            alt="ms_logo"
            style="width:2.5ch"
            src="https://metamask.io/icons/icon-96x96.png?v=48400a28770e10dd52a8c0e539aeb282"
          />Login with MetaMask</button
        >
      </div>
    </div>
  </div>
</div>
