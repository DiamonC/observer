<script lang="ts">
  import { createServer } from "$lib/scripts/req";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import Helper from "$lib/components/ui/Helper.svelte";
    import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  let version = "Latest";

  function send() {
    let sVersion = document.getElementById("versionDropdown").value;
    let sName = document.getElementById("nameInput").value;
    let sSoftware = document.getElementById("softwareDropdown").value;
    let sGamemode = document.getElementById("gamemodeDropdown").value;
    let sAdmin = document.getElementById("adminInput").value;
    let addons = [];
    let cmd = [];



    //for all 3 checkboxes, if checked, add their ids to the addons array
    if (document.getElementById("terralith").checked) {
      addons.push("terralith");
    }
    if (document.getElementById("incendium").checked) {
      addons.push("incendium");
    }
    if (document.getElementById("nullscape").checked) {
      addons.push("nullscape");
    }
        //if versioon isnt Latest, set worldgen to true
        if (sVersion != "Latest") {
      worldgen = true;
      addons = [];
    } else {
      worldgen = false;
    }

    cmd.push("defaultgamemode " + sGamemode);
    cmd.push("op " + sAdmin);

console.log(cmd);

    createServer(sName, sSoftware, sVersion, addons, cmd);


    //wait 5 seconds
    setTimeout(function () {
      //if x in localstorage is false, run code
      if (localStorage.getItem("x") == "false") {
        //go to the servers page
        goto("/");
        //wait half a second
        setTimeout(function () {
          goto("/server" + sName)
        }, 500);
      } else {
        //set it to false
        localStorage.setItem("x", "false");
      }
    }, 1000);

  }
  let worldgen = true;
  function checkV() {
    if (version != "Latest") {
      worldgen = false;
    } else {
      worldgen = true;
    }
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
            >Server Software</label
          >
          <select
            id="softwareDropdown"
            name="softwareDropdown"
            tabindex="0"
            class="select select-primary p-2 bg-base-100"

          >
          
            <option>Paper</option>
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
          <label class="label" for="softwareDropdown"
          >Minecraft Version</label
        >
        <select
        bind:value={version}
        on:change={checkV}
          id="versionDropdown"
          name="versionDropdown"
          tabindex="0"
          class="select select-primary p-2 bg-base-100"
        >
          <option>Latest</option>
          <option >1.18.2</option>
          <option>1.16.5</option>
          <option>1.12.2</option>
          <option>1.8.8</option>
        </select>
        <label class="label" for="softwareDropdown"
        >Gamemode</label
      >
      <select
        id="gamemodeDropdown"
        name="gamemodeDropdown"
        tabindex="0"
        class="select select-primary p-2 bg-base-100"
      >
        <option>Survival</option>
        <option>Creative</option>
        <option>Adventure</option>
      </select>
          <label class="label" for="1">{$t("newserver.l.name")}</label>
          <input
            id="nameInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="{$t('general.ex')} My Minecraft Server"
          />

          <label class="label" for="3">Set Admin</label>
          <input
            id="adminInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="Enter Minecraft Username"
          />
{#if worldgen}
<div class="p-2" />
<div class="justify-center flex">
  <p class="label ">Worldgen Mods</p>
  <Helper
    tooltipText="{$t('newserver.t.worldgen')}"
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
  <input id="terralith" type="checkbox" class="checkbox checkbox-secondary" />
  <input id="incendium" type="checkbox" class="checkbox checkbox-secondary" />
  <input id="nullscape" type="checkbox" class="checkbox checkbox-secondary" />
</div>
{/if}
          <a on:click={send} class="btn mt-4">{$t("button.createServer")}</a>

        </div>
      </form>
    </div>
  </div>
</div>
