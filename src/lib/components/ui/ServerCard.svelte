<script lang="ts">
  import { src_url_equal } from "svelte/internal";
  import { changeServerState } from "$lib/scripts/req.js";
  
  import { getServer } from "$lib/scripts/req.js";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import { browser } from "$app/environment";
  //Status variables
  let stopcolor = "info";
  let startcolor = "info";
  let starttext = "Start";
  let online = true;
  let email = localStorage.getItem("accountEmail");
  let po = '?';
  let apo = 0;
  let lock = false;
  //Software variables
  type serverType =
    | "paper"
    | "spigot"
    | "bukkit"
    | "waterfall"
    | "velocity"
    | "forge"
    | "fabric"
    | "quilt"
    | "mohist"
    | "vanilla";

  export let name: string;
  export let version: string;
  export let software: string;
  export let state: string;
  export let id: number;
  function uppercaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  software = uppercaseFirstLetter(software);

  let tname: string;
  
  tname = name.toLowerCase().replace(/ /g, "-");
  function setName() {
    localStorage.setItem("serverName", name);
    localStorage.setItem("serverID", id);
  }
  function status() {
    if (state == "true") {
      stopcolor = "error";
      startcolor = "warning";
      starttext = $t("button.restart");
    } else if (state == "false") {
      stopcolor = "disabled";
      startcolor = "success";
      starttext = $t("button.start");
    } else if (state == "starting") {
      stopcolor = "error";
      startcolor = "disabled";
      starttext = "Starting";
    }
  }
  status();
  function start() {
    
    if (!lock) {
      if (state == "true") {
      changeServerState("restart", id, email);
    } else if (state == "false") {
      changeServerState("start", id, email);
    }
    lock = true;
    }
  }

  function stop() {
    changeServerState("stop", id, email);
  }

let v = version;
if (version == ( "latest" ) || version == ( "Latest")) {
  v = ""
}
function getStatus() {

  getServer(id).then((data) => {
   
    if (data.state != state) {
      lock = false;
    }
    state = data.state;
    console.log("state " + state)
    status();
  });
}
  //Run status function every 5 seconds if theyre still on this page
  if (browser) {
    setInterval(function () {
      if (window.location.pathname=="/") {
        getStatus();
      }
    }, 5000);

  }

</script>

<div class="m-3">
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p>
        arthmc.xyz:{10000 + parseInt(id)}
      </p>
      <!-- <div class="card-actions justify-beginning" /> -->
      <div class="card-actions justify-end pt-4">
        <!-- placeholder for now? -->
        <div class="grow space-x-1.5 flex">
          <a href="/server/{tname}"><button on:click={setName} class="btn btn-primary btn-sm h-9"
            >Info</button
          ></a>
          <button on:click={start} type="submit" class="btn btn-success btn-sm h-9"
            >{starttext}</button
          >
          <button on:click={stop} class="btn btn-error btn-{stopcolor} btn-sm h-9 stop-btn"
            >{$t("button.stop")}</button
          >
        </div>
        <div class="self-center">
          <div class="badge badge-outline">{software} {v}</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  //
</style>
