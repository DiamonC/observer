<script lang="ts">
  import { src_url_equal } from "svelte/internal";
  import { changeServerState } from "$lib/scripts/req.js";
  import { getServerInfo } from "$lib/scripts/req.js";
  import { t, locale, locales } from "$lib/scripts/i18n";
  //Status variables
  let stopcolor = "info";
  let startcolor = "info";
  let starttext = "Start";
  let online = false;

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
  export let id: number;

  function uppercaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let tname: string;
  
  tname = name.toLowerCase().replace(/ /g, "-");

  function status() {
    if (online == true) {
      stopcolor = "error";
      startcolor = "warning";
      starttext = $t("button.restart");
    } else if (online == false) {
      stopcolor = "disabled";
      startcolor = "success";
      starttext = $t("button.start");
    }
  }
  status();
  function start() {
    changeServerState("start", id);
  }
  //getServerInfo(serverName);
</script>

<div class="m-3">
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p>
        <b>{$t("version")}:</b>
        {uppercaseFirstLetter(version)} |
        <b>Software: </b>{uppercaseFirstLetter(software)}
      </p>
      <!-- <div class="card-actions justify-beginning" /> -->
      <div class="card-actions justify-end pt-4">
        <!-- placeholder for now? -->
        <div class="grow space-x-1.5 flex">
          <a href="/server/{tname}"><button class="btn btn-primary btn-sm h-9"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></button
          ></a>
          <button on:click={start} type="submit" class="btn btn-{startcolor} btn-sm h-9"
            >{starttext}</button
          >
          <button class="btn btn-{stopcolor} btn-sm h-9 stop-btn"
            >{$t("button.stop")}</button
          >
        </div>
        <div class="self-center">
          <div class="badge badge-outline">1/20</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  //
</style>
