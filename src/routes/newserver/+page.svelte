<script>
	let serverVis = "none"
</script>

<style>
    .topnav {
		background-color: #e5e7ec;
		color: black;
		overflow: hidden;
		padding: 12px;
		margin: -8px;
		
	}
	.topnav a {
		padding: 2px 4px;
		text-align: center;
		float: left;
		text-decoration: none;
		color: #8c8c8c;
		
	}
	.topnav a:hover {
		color: #1e1e1e;
		text-decoration: underline;
	}
	.topnavright {
		float: right;
		padding-right: 1ch;
	}
	.circle {
		height: 2ch;
		width: 2ch;
    border-radius:50%;
		background-color: #ffffff;
		display: block;
	}
	.circle line {
		stroke: black;
		fill: none;
	}
	.circle:hover {
		background-color: #aaaaaa;
	}

	
</style>



<div class="topnav">
	<a href="/#">Servers</a>
	<a href="/settings" >Settings</a>
	<div class="topnavright">
	<div>
	<a href="/#" class="circle">
		<svg>
			<line x1="10" y1="4" x2="10" y2="16"></line>
			<line x1="4" y1="10" x2="16" y2="10"></line>
		</svg>
	</a>
	</div>
	</div>
</div>
<h1>Create Server</h1>
<div id="SoftwareMenu">
<form>
    <label for="softwaredd">Choose a software:</label>
	<select id="softwaredd" name="softwaredd">
		<option value="snapshot">Servers</option>
		<option value="spigot">Proxies</option>
		<option value="purpur">Modded</option>
		<option value="paper">Vanilla</option>
		<option value="tunity">Bedrock</option>
	</select>

|
<select id="serverCat" name="serverCat">
	<option value="snapshot">Bukkit</option>
	<option value="spigot">Spigot</option>
	<option value="paper">Paper</option>
	<option value="purpur">Purpur</option>
	<option value="tunity">Tunity</option>
	<option value="sponge">Sponge</option>
</select>

<select id="proxyCat" name="proxyCat">
	<option value="velocity">Velocity</option>
	<option value="bungeecord">Bungeecord</option>
	<option value="water">Waterfall</option>
	<option value="flamecord">Flamecord</option>
</select>

<select id="moddedCat" name="serverCat">
	<option value="mohist">Mohist</option>
	<option value="forge">Forge</option>
	<option value="fabric">Fabric</option>
	<option value="catserver">CatServer</option>
</select>

<select id="vanillaCat" name="serverCat">
	<option value="snapshot">Snapshot</option>
	<option value="vanilla">Vanilla</option>
</select>

<select name="bedrockCat">
	<option value="nukkit">Nukkitx</option>
	<option value="pocketmine">Pocketmine</option>
</select>

</form>
</div>

<div id="versionMenu">
	<form>
		<input type="text" placeholder="ex: latest">
	</form>
</div>