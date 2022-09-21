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

<h2 class="mt-5 mb-2 text-4xl font-extrabold md:text-6xl">
  Login to Arth Hosting
</h2>
<div class="mt-5">
  <button class="btn  btn-primary"
    ><img
      alt="ms_logo"
      style="width:2.5ch"
      src="https://microsoft.com/favicon.ico"
    />Sign in with Microsoft</button
  >
  <button class="btn  btn-primary"
    ><img
      alt="ms_logo"
      style="width:2.5ch"
      src="https://metamask.io/icons/icon-96x96.png?v=48400a28770e10dd52a8c0e539aeb282"
    />Sign in with MetaMask</button
  >
</div>
