<script lang="ts">
  import darkMode from "$lib/stores/darkMode";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  import ServerCard from "$lib/components/ui/ServerCard.svelte";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<svelte:head>
  <title>Observer</title>
</svelte:head>

<template>
  <!-- TODO: all icons should probably be made into their own components or stored somewhere in $lib for cleaner code. -->
</template>
<body>
  <div class="flex flex-wrap">
    <ServerCard
      serverName="This is such a cool Server Name!"
      software="paper"
    />
    <ServerCard serverName="This is a second Server Name!" software="quilt" />
    <ServerCard serverName="This is a third Server Name!" software="forge" />
    <ServerCard
      serverName="This is a fourth Server Name!"
      software="waterfall"
    />
    <ServerCard serverName="This is a fifth Server Name!" software="velocity" />
    <ServerCard serverName="This is a sixth Server Name!" software="spigot" />
  </div>
</body>

<style>
  body {
    margin: 0;
    padding: 0ch;
  }
</style>
