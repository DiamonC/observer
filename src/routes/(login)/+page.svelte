<script lang="ts">
  import ServerCard from "$lib/components/ui/ServerCard.svelte";
  import { t, locale, locales } from "$lib/scripts/i18n";
  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount

  //Example
  let ServerName = "Server Name";
  let name = "world";

  var id = 0;
  var servercreate = false;
  const serverName = [];
  const serverLoader = [];
  const serverVersion = [];
  function newserver() {}
</script>

<!-- TODO: all icons should probably be made into their own components or stored somewhere in $lib for cleaner code. -->
<div class="flex flex-col items-center space-y-20 mb-12">
  <div>
    <div class="divider px-10 text-3xl font-semibold">
      {$t("homepage.title")}
    </div>
    <div class="flex flex-wrap justify-center">
      <ServerCard serverName="This is such a cool Server Name!" />
      <ServerCard serverName="This is a second Server Name!" />
      <ServerCard serverName="This is a third Server Name!" />
      <ServerCard serverName="This is a fourth Server Name!" />
      <ServerCard serverName="This is a fifth Server Name!" />
      <ServerCard serverName="This is a sixth Server Name!" />
    </div>
  </div>
</div>

<style lang="scss">
  //
</style>
