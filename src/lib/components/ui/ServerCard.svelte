<script lang="ts">
  import { src_url_equal } from "svelte/internal";
  import { changeServerState } from "$lib/scripts/req.js";
  
  import { getPlayers } from "$lib/scripts/req.js";
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
  export let state: boolean;
  export let id: number;

  function uppercaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let tname: string;
  
  tname = name.toLowerCase().replace(/ /g, "-");
  function setName() {
    localStorage.setItem("serverName", name);
  }
  function status() {
    if (state == true) {
      stopcolor = "error";
      startcolor = "warning";
      starttext = $t("button.restart");
    } else if (state == false) {
      stopcolor = "disabled";
      startcolor = "success";
      starttext = $t("button.start");
    }
  }
  status();
  function start() {
    changeServerState("start", id, email);
  }

let v = version;
if (version == ( "Latest")) {
  v = ""
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
          <button class="btn btn-{stopcolor} btn-sm h-9 stop-btn"
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
