<script>
	let serverVis = "none"

</script>

<style>

	
</style>

<div class="navbar bg-base-300">
	<div class="flex-1">
	  <p class=" normal-case text-xl">Observer</p>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal p-0">
		<li><a href="/">Servers</a></li>
		<li><a href="/settings">Settings</a></li>
	  </ul>
	  <div>
		<button class="btn btn-circle text-3xl bg-base-100">
			<a href="/newserver">+</a>
		  </button>
	  </div>
	  <div class="avatar placeholder">
		<div class=" ring ring-primary bg-neutral-focus text-neutral-content rounded-full w-10">
		  <span class="text-2xl">EX</span>
		</div>
	  </div> 
	</div>
  </div>


<div id="SoftwareMenu" class="dropdown dropdown-right dropdown-end">
<form>
    <label for="softwaredd">Choose a software:</label>
	<select id="softwaredd" name="softwaredd" class="dropdown-content menu p-2 shadow bg-base-400 rounded-box w-52">
		<option value="snapshot">Servers</option>
		<option value="spigot">Proxies</option>
		<option value="purpur">Modded</option>
		<option value="paper">Vanilla</option>
		<option value="tunity">Bedrock</option>
	</select>
	

</form>
</div>

<div id="serverForm">
	<form>
		<div class="dropdown dropdown-down dropdown-right">
			<label tabindex="0" class="btn m-1">Choose ></label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<div class="divider">Featured</div>
				<li><a>Paper</a></li>
				<li><a>Velocity</a></li>
				<li><a>Waterfall</a></li>
				<li><a>Forge</a></li>
				<div class="divider">Other</div>
				<li><a>Fabric</a></li>
				<li><a>Mohist</a></li>
				<li><a>Snapshot</a></li>
				<li><a>Spigot</a></li>
			</ul>
		  </div>

		<label class="label" for="1">Server Name:</label>
		<input id="1" class="input-bordered input-primary input w-full max-w-xs bg-base-300" type="text" placeholder="ex: My Minecraft Server">

		<label class="label" for="2">Technical Server Name:</label>
		<input id="2" class="input-bordered input-primary input w-full max-w-xs bg-base-300" type="text" placeholder="ex: my_minecraft_server">

		<label class="label" for="3">Minecraft version:</label>
		<input id="3" class="input-bordered input-primary input w-full max-w-xs bg-base-300" type="text" placeholder="ex: latest, 1.16.5">
		<div><input type="submit" value="Create" class="btn"></div>
		
	</form>
</div>
