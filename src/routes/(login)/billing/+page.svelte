<script lang="ts">
  import { fade } from "svelte/transition";

  let alertOpen: boolean = true;
</script>

<div class="flex place-content-center">
  {#if alertOpen}
    <div class="fixed top-20 w-[95%]" out:fade>
      <div class="alert alert-info flex justify-between shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current flex-shrink-0 w-6 h-6"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>If you're self-hosting, you may not need this page!</span>
        </div>
        <button
          class="btn btn-ghost btn-sm"
          on:click={() => (alertOpen = false)}>Dismiss</button
        >
      </div>
    </div>
  {/if}
  <div class="flex flex-col grow items-center max-w-[55rem] mb-10 space-y-6">
    <h1 class="divider px-10 text-3xl font-semibold">Billing</h1>
    <div
      class="flex stats grow bg-base-300 border-base-300 border w-[100%] md:w-[80%]"
    >
      <div class="stat">
        <div class="stat-title">Your Balance</div>
        <div class="stat-value">$9 USD</div>
        <div class="stat-desc">$9 charge in 21 days</div>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center button-container sm:space-x-3 w-[90%]"
    >
      <a
        href="/request-placeholder"
        class="btn btn-primary grow md:grow sm:w-44 mr-1 sm:m-0"
        >Request Extension</a
      >
      <a
        href="/request-placeholder"
        class="btn grow md:grow sm:w-44 ml-1 md:m-0">Payment Methods</a
      >
      <a
        href="/request-placeholder"
        class="btn btn-success btn-block md:grow sm:w-44 mt-2.5 sm:m-0"
      >
        Pay Bill
      </a>
    </div>
  </div>
</div>
