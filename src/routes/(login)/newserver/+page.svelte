<script lang="ts">
    import { createServer } from "$lib/scripts/req.ts";
	function send() {
	let sVersion = document.getElementById("versionInput").value;
	let sName = document.getElementById("nameInput").value;
	let sSoftware = document.getElementById("softwareDropdown").value;

	createServer(sName, sSoftware, sVersion) 
	}
</script>

<div class="flex place-content-center">
  <div class="flex-col mb-10">
    <div class="divider px-10 text-3xl font-semibold">New Server</div>
    <div id="serverForm">
      <form>
        <div class="flex flex-col w-[22rem]">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label" for="softwareDropdown">Choose Software...</label>
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
          <label class="label" for="1">Server Name</label>
          <input
            id="nameInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="ex: My Minecraft Server"
          />

          

          <label class="label" for="3">Minecraft version:</label>
          <input
            id="versionInput"
            class="input-bordered input-primary input w-full bg-base-300"
            type="text"
            placeholder="ex: latest, 1.16.5"
          />
          <button type="submit" on:click={send} class="btn mt-4">Create Server</button>
        </div>
      </form>
    </div>
  </div>
</div>
