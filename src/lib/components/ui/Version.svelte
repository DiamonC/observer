<script lang="ts">
    import { sendVersion } from "$lib/scripts/req";

    import Versions from "$lib/components/ui/ChooseVersion.svelte";
  import { browser } from "$app/environment";

     
  export let name: string;
  export let date: string;
  export let type: string;
  export let url: string;

if (type == "release") {
    type = "";
} else if (type == "beta") {
    type = "Beta";
;
} else if (type == "alpha") {
    type = "Alpha";

}
let time = new Date(date).toLocaleString();

function submit() {
    let id = "";
    if (browser) {
        id = localStorage.getItem("serverID");
    }
    sendVersion(url, id);
}
</script>

<div class="bg-base-200 rounded-lg p-3">
    <div class="flex justify-between place-items-center">
   

          
                <div class="flex space-x-1"><p class="text-xl font-bold">{name}</p><div class="flex space-x-1 place-items-end"><p class="text-warning">{type}</p></div></div>
                <div class="flex place-items-center space-x-2"><p>{time}</p><button on:click={submit} class="btn btn-ghost btn-circle btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></button></div>
            
 
        
    </div>
</div>