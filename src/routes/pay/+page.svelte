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

<body>
  <div class="stats bg-base-300 border-base-300 border md:w-1/2">
    <div class="stat">
      <div class="stat-title">Your Balance</div>
      <div class="stat-value">$9 USD</div>
      <div class="stat-desc">$9 charge in 21 days</div>
    </div>
  </div>
  <div class="btn btn-primairy">
    <p>hi</p>
  </div>
</body>
