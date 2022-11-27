<script lang="ts">
  import { fade } from "svelte/transition";
  import { t, locale, locales } from "$lib/scripts/i18n";

  let alertOpen: boolean = true;
</script>

<div class="flex place-content-center">
  <div class="flex flex-col grow items-center max-w-[55rem] mb-10 space-y-6">
    <h1 class="divider px-10 text-3xl font-semibold">{$t("bill.title")}</h1>
    <div
      class="flex stats grow bg-base-300 border-base-300 border w-[100%] md:w-[80%]"
    >
      <div class="stat">
        <div class="stat-title">{$t("bill.balance")}</div>
        <div class="stat-value">$9 USD</div>
        <div class="stat-desc">
          $9 {$t("bill.chargein")}21 {$t("bill.days")}
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center button-container sm:space-x-3 w-[90%]"
    >
      <a
        href="/request-placeholder"
        class="btn grow md:grow sm:w-44 ml-1 md:m-0">{$t("button.methods")}</a
      >
      <a
        href="/request-placeholder"
        class="btn btn-success btn-block md:grow sm:w-44 mt-2.5 sm:m-0"
      >
        {$t("button.payBill")}
      </a>
    </div>
  </div>
</div>
