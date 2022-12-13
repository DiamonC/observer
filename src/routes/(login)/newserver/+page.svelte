<script lang="ts">
  import { createServer } from "$lib/scripts/req";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import Helper from "$lib/components/ui/Helper.svelte";
    import { goto } from "$app/navigation";

  function send() {
    let sVersion = document.getElementById("versionInput").value;
    let sName = document.getElementById("nameInput").value;
    let sSoftware = document.getElementById("softwareDropdown").value;

    createServer(sName, sSoftware, sVersion);


      goto(`/server/${sName}`);

  }
</script>

<div class="flex place-content-center">
  <div class="flex-col mb-10">
    <div class="divider px-10 text-3xl font-semibold">
      {$t("newserver.title")}
    </div>
    <div id="serverForm">
      <form>
        <div class="flex flex-col w-[22rem]">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label" for="softwareDropdown"
            >{$t("newserver.l.choose")}</label
          >
          <select
            id="softwareDropdown"
            name="softwareDropdown"
            tabindex="0"
            class="select select-primary p-2 bg-base-100"
          >
            <option>{$t("software.paper")}</option>
            <option>Velocity</option>
            <option>Quilt</option>
            <option>Vanilla</option>
            <option>Waterfall</option>
            <option>Forge</option>
            <option>Fabric</option>
            <option>Mohist</option>
            <option>Snapshot</option>
            <option>Spigot</option>
          </select>
          <label class="label" for="1">{$t("newserver.l.name")}</label>
          <input
            id="nameInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="{$t('general.ex')} My Minecraft Server"
          />

          <label class="label" for="3">{$t("newserver.l.version")}</label>
          <input
            id="versionInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="{$t('general.ex')} latest, 1.16.5"
          />
          <div class="p-2" />
          <div class="justify-center flex">
            <p class="label ">Worldgen Mods</p>
            <Helper
              tooltipText="Enabling a worldgen mod can add new biomes and enhance the look of your natural terrain. They aren't made by Arth or Mojang, so we can't guarentee it'll be completely stable."
            />
          </div>

          <div class="flex justify-center">
            <img
              class="mask mask-hexagon"
              src="/images/terralith.webp"
              width="100ch"
            />

            <img
              class="mask mask-hexagon"
              src="/images/nullscape.webp"
              width="100ch"
            />
            <img
              class="mask mask-hexagon"
              src="/images/incendium.webp"
              width="100ch"
            />
          </div>
          <div class="p-2" />
          <div class="flex justify-center space-x-20">
            <input type="checkbox" class="checkbox checkbox-secondary" />
            <input type="checkbox" class="checkbox checkbox-secondary" />
            <input type="checkbox" class="checkbox checkbox-secondary" />
          </div>
          <a on:click={send} class="btn mt-4">{$t("button.createServer")}</a>

        </div>
      </form>
    </div>
  </div>
</div>
