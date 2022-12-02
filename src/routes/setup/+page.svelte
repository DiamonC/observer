<script>
  let steps = 0;
  import { t } from "$lib/scripts/i18n";
  import APISettings from "$lib/components/ui/ApiSettings.svelte";
  import Navbar from "$lib/components/layout/Navbar.svelte";
  import { apiurl } from "$lib/scripts/req";
  import Settings from "$lib/components/ui/Settings.svelte";
  import { fade } from "svelte/transition";

  function step() {
    steps++;
    let step2 = steps + "";
    //add the class "step-secondary" to the element with the id of steps
    document.getElementById(step2).classList.add("step-secondary");
    if (steps == 1) {
      //add property disabled to id "ckbx"
      document.getElementById("ckbx").disabled = true;

      document.getElementById("step2").classList.remove("hidden");
    }
    if (steps == 2) {
      //add class disabled to id "dld"
      document.getElementById("dld").classList.add("btn-disabled");
      document.getElementById("step3").classList.remove("hidden");
      document.getElementById("finish").classList.remove("invisible");
    }
  }
</script>

<Navbar navType="welcome" />
<div class="p-7" />
<div class="grid  items-center">
  <ul class="steps">
    <li id="0" class="step step-secondary">{$t("setup.s1")}</li>
    <li id="1" class="step">{$t("setup.s2")}</li>
    <li id="2" class="step">{$t("setup.s3")}</li>
    <li id="3" class="step">{$t("setup.s4")}</li>
  </ul>
  <div class="flex flex-col items-center">
    <div class="divider text-xl p-3">{$t("setup.h1")}</div>
    <p class="p-3">
      {$t("setup.desc1")}
    </p>
    <APISettings />
    <input
      type="checkbox"
      id="ckbx"
      class="checkbox checkbox-success m-5"
      on:click={step}
    />
  </div>
  <div class="flex flex-col items-center hidden" id="step2">
    <div class="divider text-xl">{$t("setup.h2")}</div>
    <p class="p-3">
      {$t("setup.desc2")}
    </p>
    <a target="_blank" href="{apiurl}panel-key" download
      ><button id="dld" class="btn btn-secondary" on:click={step}
        >{$t("button.download")}</button
      ></a
    >
  </div>

  <div class="flex flex-col pl-10 hidden" id="step3">
    <div class="divider text-xl p-3">{$t("setup.h3")}</div>
    <Settings />
  </div>
  <button class="btn btn-block invisible" id="finish" on:click={step}
    ><a href="/">{$t("button.finish")}</a></button
  >
</div>
