<script lang="ts">
    import { browser, dev } from "$app/environment";
    import { onMount } from "svelte";
    import {getPlayers, getServers} from "$lib/scripts/req";
    let name:string = "-";
    let tname:string;
    let url:string;
    let apo = 12;
    let po = 0;
    let port = '10000';
    let id = 0;
    let length = 0;
    let s = 'Paper';
    let v = 'latest';
    //email = localStorage.getItem("accountEmail");
    let email:string = "";
    if (browser) {
        email = localStorage.getItem("accountEmail");

    }

    
    function getID(res: any) {
    for (var i = 0; i < length; i++) {
      //res2 is res but a string
      let res2 = res.names[i];
      //if index of tname in res2 is not -1, set id to i
      console.log(res2);
      if (res2.indexOf(tname) != -1) {
        id = i;
        s = res.softwares[i];
        v = res.versions[i];
      }
    }
  }
    
    onMount(() => {
      //getservers and store ids in a variable
        const gs = getServers(email).then((response) => {
            if (browser) {
              //set length to amount
                length = response.amount;

                getID(response)
                console.log(response.ids);
                console.log(id);
              
                if (response.ids != "undefined") {
                    port = '1000' + response.ids[id];
                }

            }
        });
        const gp = getPlayers('arthmc.xyz:'+ port).then((response) => {
            if (browser) {
                console.log(response);
                apo = response;
            }
        });
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
    tname = url.substring(url.lastIndexOf('/') + 1);
    name = tname.charAt(0).toUpperCase() + tname.slice(1);

    //if tname has character encoding, decode it
    if (tname.includes("%")) {
        tname = decodeURIComponent(tname);
    }
}

    
</script>

<div class="flex flex-col">
  <div class="text-5xl font-bold divider ">{name}</div>
</div>

<div class="space-x-7 flex justify-center p-10">
  <div class="stats shadow bg-base-200">
  
    <div class="stat">
      <div class="stat-title">IP Address:</div>
      <div class="stat-value">arthmc.xyz:{port}</div>
      <div class="stat-desc flex">Confused? <p class="link">Learn how to join servers.</p></div>
    </div>
    
  </div>
  <div class="stats shadow bg-base-200">
  
    <div class="stat">
      <div class="stat-title">Software</div>
      <div class="stat-value">{s}</div>
    </div>
    <div class="stat">
      <div class="stat-title">Version</div>
      <div class="stat-value">{v}</div>
    </div>
    <div class="stat">
      <div class="stat-title">Players Online</div>
      <div class="stat-value tabular-nums">{po}</div>
    </div>
    
    
  </div>
</div>