<script lang="ts">
  import { src_url_equal } from "svelte/internal";

  let stopcolor = "info";
  let startcolor = "info";
  let starttext = "Start";
  let online = false;
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

  export let serverName: string;
  let version: string = "latest";
  let software: string = "paper";

  function uppercaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Request Configs
  const getInfo = {
    method: "GET",
    headers: {
      techname: serverName,
    },
  };

  const response = fetch("https://api.arthmc.xyz/server", getInfo)
    .then((response) => response.json())
    //.then(response => console.log(response))
    .catch((err) => console.error(err));

  //Tell backend to start or stop servers
  const startStop = {
    method: "FETCH",
    headers: {
      request: "start",
    },
  };

  fetch("https://api.arthmc.xyz/server", getInfo)
    .then((response) => response.json())
    //.then(response => console.log(response))
    .catch((err) => console.error(err));

  function status() {
    if (online == true) {
      stopcolor = "error";
      startcolor = "warning";
      starttext = "Restart";
    } else if (online == false) {
      stopcolor = "disabled";
      startcolor = "success";
      starttext = "Start";
    }
  }
  status();
</script>

<div class="m-3">
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <div class="card-body">
      <h2 class="card-title">{serverName}</h2>
      <p>
        <b>Version:</b>
        {uppercaseFirstLetter(version)} |
        <b>Software: </b>{uppercaseFirstLetter(software)}
      </p>
      <!-- <div class="card-actions justify-beginning" /> -->
      <div class="card-actions justify-end pt-4">
        <!-- placeholder for now? -->
        <div class="grow space-x-0.5">
          <button class="btn btn-primary btn-sm h-9">Terminal</button>
          <button class="btn btn-{startcolor} btn-sm h-9">{starttext}</button>
          <button class="btn btn-{stopcolor} btn-sm h-9">Stop</button>
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
