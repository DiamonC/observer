<script lang="ts">
  import { createServer } from "$lib/scripts/req";
  import { t, locale, locales } from "$lib/scripts/i18n";
  var email: string = "";
  //set email to the value of localstorage.getItem("email") if window is defined
  if (typeof window !== "undefined") {
    email = localStorage.getItem("accountEmail");
    console.log(email);
  }
  function subscribe() {
    //set localstorage item "subscribed" to true if localstorage is defined
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("subscribed", "true");
    }
  }

  //turn all @s into %40s
  email = email.replace("@", "%40");
</script>

<div class="flex justify-center  hero  bg-base-100 rounded-xl">
  <div class="flex hero-content">

    <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://buy.stripe.com/6oEg2hbEpf917L2cMM?prefilled_email={email}
      https
    "
    on:click={subscribe}
  >
    <button class="btn btn-secondary btn-outline">
      {$t("button.subscribe")}
    </button></a
  >

    <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://billing.stripe.com/p/login/fZeaHs7161SWaWcaEE?prefilled_email={email}
  
"
    on:click={subscribe}
  >
    <button class="btn btn-secondary btn-outline">
      {$t("button.manage")}
    </button></a
  >




  </div>
</div>
