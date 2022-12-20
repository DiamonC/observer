<script lang="ts">
    import { browser, dev } from "$app/environment";
    import { onMount } from "svelte";
    import {getPlayers, getServers} from "$lib/scripts/req";
    let name:string = "-";
    let tname:string;
    let url:string;
    let apo = 0;
    let po = 0;
    let port = 10000;
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
      console.log("id: " + id);
                console.log("length: " + length);
      //res2 is res but a string
      let res2 = res.names[i];


      //if index of tname in res2 is not -1, set id to i
      console.log(tname.toUpperCase());
      if (res2 == name) {
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
                name = localStorage.getItem("serverName");
                getID(response)
                console.log(response.ids);

              
                if (response.ids != "undefined") {
                    port+=parseInt(response.ids[id]);
                }

            }
        });
//wait half a second
        setTimeout(() => {
            //get players and store amount in a variable
            const gp = getPlayers('arthmc.xyz:'+ port).then((response) => {
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
    tname = url.substring(url.lastIndexOf('/') + 1);
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