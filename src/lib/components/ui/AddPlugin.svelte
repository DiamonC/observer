<script>
  import { browser } from "$app/environment";
import {searchPlugins} from "$lib/scripts/req";
import PluginResult from "./PluginResult.svelte";

    function search() {
if (browser) {

  document.getElementById("plugins").innerHTML = "";
  let query= document.getElementById("search").value;
    let software = localStorage.getItem("serverSoftware");
    let version = localStorage.getItem("serverVersion");
    searchPlugins(software, version, query). then((response) => {
      console.log(response.hits);
      //for each item in the hits array, create a new plugin result
      response.hits.forEach((item) => {
        new PluginResult({
          target: document.getElementById("plugins"),
          props: {
            name: item.title,
            desc: item.description,
            icon: item.icon_url,
            author: item.author,
            id: item.project_id,
          }
        
    });
    
  
  });
    


  }
  );
}
    }


</script>

<label for="my-modal-5" class="btn" on:click={search}>Add Plugin</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  
  <div class="modal-box w-11/12 max-w-5xl space-y-5">

    <div class="flex justify-between">
        <h3 class="font-bold text-lg">Plugins from Modrinth</h3>
    <div class="modal-action">
        <label for="my-modal-5" class="btn btn-circle btn-sm btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></label>
      </div>
    </div>

    <div>
      <input type="text" placeholder="Search" class="input input-bordered input-sm" id="search"/>
      <button class="btn btn-sm btn-primary" on:click={search}>Search</button>
    </div>
    <div id="plugins" class="space-y-2">
      
    </div>
    
  </div>
</div>

