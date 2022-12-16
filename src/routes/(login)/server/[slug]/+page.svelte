<script lang="ts">
    import { browser, dev } from "$app/environment";
    let tname:string;
    let url:string;
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


<div class="stats shadow bg-base-200">
  
    <div class="stat">
      <div class="stat-title">IP Address:</div>
      <div class="stat-value">+{tname}.arthmc.xyz</div>
      <div class="stat-desc flex">Confused? <p class="link">Learn how to join servers.</p></div>
    </div>
    
  </div>