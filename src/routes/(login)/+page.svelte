<script lang="ts">
  import ServerCard from "$lib/components/ui/ServerCard.svelte";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import { getServers } from "$lib/scripts/req";
  import { browser, dev } from "$app/environment";
  import { goto } from "$app/navigation";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount

  //Example
  let name = "world";

  var id = 0;
  var servercreate = false;
  let names = [];
  let softwares = [];
  let versions = [];
  function newserver() {}
  let res2 = {};
  let email: string = "";
  if (browser) {
    email = localStorage.getItem("accountEmail");
    console.log("hey" + localStorage.getItem("accountEmail"));
  }
  console.log("yo" + email);
  // getServers and store "amount" given in the response in a variable
  getServers(email).then((response) => {
    if(browser) {
    console.log(response);
    if (response.amount != "undefined") {
      id = response.amount;
    }
    DOM(response);
  }
  });
  function DOM(res2: string) {
    for (var i = 0; i < id; i++) {
      let serverName = res2.names[i];
      let serverLoader = res2.softwares[i];
      let serverVersion = res2.versions[i];

      // run code if its on the browser

      if (browser) {
        // add a new server card to the div with the id "serverList"
        new ServerCard({
          target: document.getElementById("serverList"),
          props: {
            name: serverName,
            version: serverVersion,
            software: serverLoader,
          },
        });
      }
    }
  }
</script>

<div class="flex flex-col items-center space-y-20 mb-12">
  <div>
    <div class="divider px-10 text-3xl font-semibold">
      {$t("homepage.title")}
    </div>
    <div class="flex flex-wrap justify-center" id="serverList">
      <!-- <ServerCard name="Server Name" loader="Loader" version="Version" /> -->
    </div>
  </div>
</div>

<style lang="scss">
  //
</style>
