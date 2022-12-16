<script lang="ts">
  import Helper from "$lib/components/ui/Helper.svelte";
  import { getSettings } from "$lib/scripts/req";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import { onMount } from "svelte";
  import { apiurl } from "$lib/scripts/req";
  import { pburl } from "$lib/scripts/req";
  import Settings from "$lib/components/ui/Settings.svelte";
  import ApiSettings from "$lib/components/ui/ApiSettings.svelte";
</script>

<div class="flex justify-center">
  <div class="flex flex-col max-w-2xl">
    <div class="divider px-10 text-3xl font-semibold">
      {$t("settings.title")}
    </div>
    <p class="text-center mt-2">
      {$t("settings.desc")}
    </p>
    <div class="divider text-xl font-semibold mt-8">
      {$t("settings.h.general")}
    </div>
    <form id="settingsForm">
      <ApiSettings />
      <Settings />

      <div>
        <input
          type="submit"
          value={$t("button.save")}
          class="btn btn-block btn-disabled"
        />
      </div>
    </form>
  </div>
</div>
