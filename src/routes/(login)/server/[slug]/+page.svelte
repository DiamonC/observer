<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { onMount } from "svelte";
  import {
    getPlayers,
    changeServerState,
    deleteServer,
    writeTerminal,
    readTerminal,
  } from "$lib/scripts/req";
  import { getServer } from "$lib/scripts/req.js";
  import Admin from "$lib/components/icons/admin.svelte";
  import Banned from "$lib/components/icons/banned.svelte";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import PluginResult from "$lib/components/ui/PluginResult.svelte";
  import {searchPlugins} from "$lib/scripts/req.js";
  import AddPlugin from "$lib/components/ui/AddPlugin.svelte";
  let name: string = "-";
  let tname: string;
  let url: string;
  let apo = 0;
  let po = 0;
  let port = 10000;
  let id = 0;
  let lock = false;
  let s = "Paper";
  let v = "latest";

  let email: string = "";
  let state = "false";
  if (browser) {
    email = localStorage.getItem("accountEmail");
    //hide horizontal scrollbar
    document.body.style.overflowX = "hidden";
  }

  onMount(() => {
    name = localStorage.getItem("serverName");
    id = localStorage.getItem("serverID");

    port += parseInt(id);

    //wait half a second
    setTimeout(() => {
      //get players and store amount in a variable
      const gp = getPlayers("arthmc.xyz:" + port).then((response) => {
        if (browser) {
          console.log("port is " + port);
          apo = response;
        }
      });
    }, 500);
    //increase po evey second until it reaches apo
    setInterval(() => {
      if (po < apo) {
        po++;
      }
    }, 50);
  });
  //grab window url
  if (browser) {
    url = window.location.href;
    //set tname to url after the last slash
    tname = url.substring(url.lastIndexOf("/") + 1);
    //if tname has character encoding, decode it
    if (tname.includes("%")) {
      tname = decodeURIComponent(tname);
    }
  }
  function getStatus() {
    //get server status
    getServer(id).then((response) => {
      //set state to response
      state = response.state;
      console.log(id + "'s state is " + state);
    });
  }

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
  function del() {
    deleteServer(id);
  }
  function stop() {
    changeServerState("stop", id, email);
  }

  onMount(() => {
    getStatus();
  });

  function writeCmd() {
    //take input value
    let input = document.getElementById("input").value;
    //if key pressed is enter, send alert
    if (event.keyCode == 13) {
      getStatus();
      console.log("sending " + input + " to " + id);
      writeTerminal(id, input);
      //clear input
      document.getElementById("input").value = "";
    }
  }

  function readCmd() {
    let rt;
    readTerminal(id).then((response) => {
      //set rt to response
      rt = response;
      if (browser) {
        //todo: fix everything being on one line

        //set terminal's text to rt
        document.getElementById("terminal").innerHTML = rt;
      }
    });
    //set terminal's text to rt
  }
  readCmd();
  //Run status function every 5 seconds if theyre still on this page
  if (browser) {
    setInterval(function () {
      if (window.location.pathname == "/server/" + tname) {
        getStatus();
        readCmd();
        if (browser) {
          let terminal = document.getElementById("terminal");
        }
      }
    }, 5000);
  }

 

</script>

<style>

</style>

<div class="yo h-[75vh] h-screen">
  <div class=" flex justify-between">
    <div class="space-x-2">
      <a href="/" class="btn btn-info "
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
          ><line x1="19" y1="12" x2="5" y2="12" /><polyline
            points="12 19 5 12 12 5"
          /></svg
        >
        {$t("button.back")}</a
      >
      <a on:click={del} href="/" class="btn btn-warning "
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-trash-2"
          ><polyline points="3 6 5 6 21 6" /><path
            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          /><line x1="10" y1="11" x2="10" y2="17" /><line
            x1="14"
            y1="11"
            x2="14"
            y2="17"
          /></svg
        >
        {$t("button.delete")}</a
      >
    </div>
    <!-- TODO: these should be on the right, add an if for not reaching the backend -->
    <div class="space-x-2">
      {#if state == "true"}
        <a on:click={start} class="btn btn-success"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-repeat"
            ><polyline points="17 1 21 5 17 9" /><path
              d="M3 11V9a4 4 0 0 1 4-4h14"
            /><polyline points="7 23 3 19 7 15" /><path
              d="M21 13v2a4 4 0 0 1-4 4H3"
            /></svg
          >{$t("button.restart2")}</a
        >
        <a on:click={stop} class="btn btn-error"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-stop-circle"
            ><circle cx="12" cy="12" r="10" /><rect
              x="9"
              y="9"
              width="6"
              height="6"
            /></svg
          >{$t("button.stop2")}</a
        >
      {:else if state == "false"}
        <a on:click={start} class="btn btn-success"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-play-circle"
            ><circle cx="12" cy="12" r="10" /><polygon
              points="10 8 16 12 10 16 10 8"
            /></svg
          >{$t("button.start2")}</a
        >
        <a href="/" class="btn btn-disabled "
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-stop-circle"
            ><circle cx="12" cy="12" r="10" /><rect
              x="9"
              y="9"
              width="6"
              height="6"
            /></svg
          >{$t("button.stop2")}</a
        >
      {:else}
        <a href="" class="btn btn-success"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-loader animate-spin"
            ><line x1="12" y1="2" x2="12" y2="6" /><line
              x1="12"
              y1="18"
              x2="12"
              y2="22"
            /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line
              x1="16.24"
              y1="16.24"
              x2="19.07"
              y2="19.07"
            /><line x1="2" y1="12" x2="6" y2="12" /><line
              x1="18"
              y1="12"
              x2="22"
              y2="12"
            /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line
              x1="16.24"
              y1="7.76"
              x2="19.07"
              y2="4.93"
            /></svg
          >
          {$t("button.starting2")}</a
        >
        <a on:click={stop} class="btn btn-error"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-stop-circle"
            ><circle cx="12" cy="12" r="10" /><rect
              x="9"
              y="9"
              width="6"
              height="6"
            /></svg
          >{$t("button.stop2")}</a
        >
      {/if}
    </div>
  </div>
  <div class="flex flex-col">
    <div class="text-5xl font-bold divider ">{name}</div>
  </div>

  <div class="space-x-7 flex justify-between p-10">
    <div class="overflow-x-auto hidden">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Player</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody class="">
          <!-- row 1 -->
          <tr>
            <td>Cy Ganderton</td>
            <td><Admin /></td>
          </tr>
          <!-- row 2 -->
          <tr>
            <td>Hart Hagerty</td>
            <td><Banned /></td>
          </tr>
          <!-- row 3 -->
          <tr>
            <td class="space-x-2"
              ><input
                type="text"
                placeholder="Enter Username"
                style="width: 16ch"
                class="input bg-base-200"
              /><select
                tabindex="0"
                class="select select-primary p-2 bg-base-100"
                style="width: 10ch"
              >
                <option>Admin</option>
                <option>Ban</option>
                <option>Reset</option>
              </select>
            </td>
            <td><a class="btn">Add</a></td>
          </tr>
        </tbody>
      </table>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Plugin</th>
              <th />
            </tr>
          </thead>
          <tbody class="">
            <!-- row 1 -->
            <tr>
              <td>ArthCore</td>
              <td
                ><button class="btn btn-ghost btn-sm btn-circle"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit-3"
                    ><path d="M12 20h9" /><path
                      d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                    /></svg
                  ></button
                ></td
              >
            </tr>
            <!-- row 2 -->
            <tr>
              <td>PlayerPlot-Modded</td>
              <td
                ><button class="btn btn-ghost btn-sm btn-circle"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit-3"
                    ><path d="M12 20h9" /><path
                      d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                    /></svg
                  ></button
                ></td
              >
            </tr>
            <!-- row 3 -->
            <tr class="flex justify-center">
              <td
                ><a class="btn btn-primary"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-upload"
                    ><path
                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    /><polyline points="17 8 12 3 7 8" /><line
                      x1="12"
                      y1="3"
                      x2="12"
                      y2="15"
                    /></svg
                  ></a
                ></td
              >
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div
        class="bg-base-300 h-96 rounded-xl shadow-xl overflow-auto w-5/6 xl:w-full"
      >
        <p class="p-5 sm:text-xs xl:text-lg font-mono" id="terminal" />
      </div>
      <input
        on:keypress={writeCmd}
        id="input"
        type="text"
        placeholder="Enter Command"
        class="input input-secondary bg-base-200 w-5/6 xl:w-full "
      />
    </div>
    <div class="m-3 space-y-5">
      <div class="stats bg-base-200 shadow-xl image-full">
        <div class="stat">
          <div class="stat-title">{$t("server.ip")}</div>
          <div class="stat-value">arthmc.xyz:{port}</div>
          <div class="stat-desc">
            {$t("server.howtojoin")}
            <a class="link link-accent">{$t("server.howtojoin2")}</a>.
          </div>
        </div>
        
      </div>
      

      <AddPlugin/>
    </div>
  </div>
</div>
