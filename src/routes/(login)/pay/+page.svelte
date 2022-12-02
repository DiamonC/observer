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
</script>

<div class="flex justify-center  hero  bg-base-100 rounded-xl">
  <div class="flex flex-col hero-content">
    {#if email == ""}
      <div class="space-x-10">
        <p class="text-left text-3xl ">{$t("pay.h.subscribed")}</p>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://billing.stripe.com/p/login/test_3csdUN00Ccpa1zi7ss?prefilled_email={email}
      
    "
        on:click={subscribe}
      >
        <button class="btn btn-secondary btn-outline">
          {$t("button.manage")}
        </button></a
      >
    {:else}
      <div class="space-x-10">
        <p class="text-left text-2xl">
          {$t("pay.h")}
        </p>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://buy.stripe.com/test_4gw02leq9cg83DiaEE?prefilled_email={email}
          https
        "
        on:click={subscribe}
      >
        <button class="btn btn-secondary btn-outline">
          {$t("button.subscribe")}
        </button></a
      >
    {/if}
  </div>
</div>
