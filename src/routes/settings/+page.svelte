

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

  <div id="settingsForm">
	<form>

		<label class="label" for="3">Webpanel URL:</label>
		<input id="3" class="input-bordered input-primary input w-full max-w-xs bg-base-300" type="text" placeholder="ex: https://localhost:5173">

		<label class="label" for="3">Webpanel Title:</label>
		<input id="3" class="input-bordered input-primary input w-full max-w-xs bg-base-300" type="text" placeholder="ex: Panel">

		<div><input type="submit" value="Save" class="btn"></div>
		
	</form>
</div>
