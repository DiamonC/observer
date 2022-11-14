<script lang="ts">
  import Helper from "$lib/components/ui/Helper.svelte";
  import { settings } from "$lib/stores/settings";
  import { t, locale, locales } from "$lib/scripts/i18n";
  $: webname = $settings.webname;
  $: webtitle = $settings.webtitle;
  $: webport = $settings.webtitle;
  $: trustedDomains = $settings.webtitle;
  $: enablePay = $settings.enablePay;

  function writeSettings() {
    let xWebname = document.getElementById("webname").value;
    console.log(xWebname);
    $settings.webname = xWebname;

    let xTrustedDomains = document.getElementById("trustedDomains").value;
    console.log(xTrustedDomains);
    $settings.trustedDomains = xTrustedDomains;

    let xWebport = document.getElementById("webport").value;
    console.log(xWebname);
    $settings.webport = xWebport;

    let xWebtitle = document.getElementById("webtitle").value;
    console.log(xWebname);
    $settings.webtitle = xWebtitle;

    let xPayEnable = document.getElementById("payEnable").checked;
    $settings.webname = xPayEnable;
  }
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
      <label class="label" for="3">{$t("settings.l.webport")}</label>
      <div class="flex space-x-2">
        <input
          id="3"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder="{$t('general.ex')} 3000"
        />
        <Helper
          tooltipText="This is the port that this panel will run on (3000 by default). If you're not using a reverse proxy, you will see :port after the hostname in the URL."
        />
      </div>

      <label class="label" for="3">{$t("settings.l.webtitle")}</label>
      <div class="flex space-x-2">
        <input
          id="webtitle"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder={$t("site.webtitle")}
        />
      </div>

      <label class="label" for="3">{$t("settings.l.webname")}</label>
      <div class="flex space-x-2">
        <input
          id="webname"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder={$t("navbar.webname")}
        />
      </div>

      <label id="payEnable" class="label cursor-pointer">
        <span class="label-text">{$t("settings.l.pay")}</span>
        <input
          id="payEnable"
          type="checkbox"
          class="toggle toggle-primary"
          checked
        />
      </label>

      <div class="divider text-xl font-semibold mt-8 mb-6">
        {$t("settings.h.trusted")}
      </div>

      <p>
        {$t("settings.desc.trusted")}
      </p>
      <input
        id="3"
        class="input-bordered input-primary input w-full max-w-xs bg-base-300 my-4"
        type="text"
        placeholder="ex: modrinth.com,example.com"
      />

      <div>
        <input
          type="submit"
          value={$t("button.save")}
          class="btn btn-block"
          on:click={writeSettings}
        />
      </div>
    </form>
  </div>
</div>
