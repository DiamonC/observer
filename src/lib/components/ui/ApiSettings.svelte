<script>
  import { apiurl, pburl } from "$lib/scripts/req";
	import { t } from "$lib/scripts/i18n";
</script>

<p class="label">{$t("settings.l.quartz")}</p>
<div class="flex space-x-2">
  <input
    id="webport"
    class="input-bordered input-primary input w-full max-w-xs bg-base-300"
    type="text"
    placeholder={apiurl}
  />
</div>
<p class="label">{$t("settings.l.pb")}</p>
<div class="flex space-x-2">
  <input
    id="webport"
    class="input-bordered input-primary input w-full max-w-xs bg-base-300"
    type="text"
    placeholder={pburl}
  />
</div>
