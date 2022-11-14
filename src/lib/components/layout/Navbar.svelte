<script lang="ts">
  import ThemeToggle from "./../ui/ThemeToggle.svelte";
  import AccountButton from "./../ui/AccountButton.svelte";
  import { settings } from "$lib/stores/settings";
  import LangButton from "../ui/LangButton.svelte";
  import { t, locale, locales } from "$lib/scripts/i18n";

  let enablePay = true;
  let login = false;
  type NavType = "default" | "welcome";

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token") == null) {
      localStorage.setItem("token", "");
    }
    if (localStorage.getItem("token") !== "") {
      login = true;
    } else {
      login = false;
    }
  }
  console.log(login);
  export let navType: NavType;
</script>

{#if navType === "default"}
  <div class="navbar bg-base-300 px-4">
    <div class="hidden sm:block flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/"
        >{$t("navbar.webname")}</a
      >
    </div>
    <div class="flex-1 md:flex-none space-x-2 navbar-end">
      <ul class="invisible md:visible md:space-x-0 menu menu-horizontal p-0">
        <li><a href="/">{$t("navbar.servers")}</a></li>
        <li><a href="/settings">{$t("navbar.settings")}</a></li>
      </ul>

      <div class="visible md:hidden">
        <a href="/" class="btn btn-ghost btn-circle"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
            ><path
              d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            /><polyline points="9 22 9 12 15 12 15 22" /></svg
          >
        </a>
      </div>
      <div class="visible md:hidden">
        <a href="/settings" class="btn btn-ghost btn-circle"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-settings"
            ><circle cx="12" cy="12" r="3" /><path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            /></svg
          >
        </a>
      </div>
      <LangButton />
      <ThemeToggle />
      {#if enablePay === true}
        <a href="/billing" class="btn btn-ghost btn-circle"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
            ><circle cx="9" cy="21" r="1" /><circle
              cx="20"
              cy="21"
              r="1"
            /><path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            /></svg
          >
        </a>
      {/if}
      <a href="/newserver" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-plus"
          ><line x1="12" y1="5" x2="12" y2="19" /><line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          /></svg
        ></a
      >

      <AccountButton loginStatus={login} />
    </div>
  </div>
{:else if navType === "welcome"}
  <div class="navbar fixed justify-between px-6">
    <a class="btn btn-ghost normal-case text-2xl" href="/"
      >{$t("navbar.webname")}</a
    >
    <ThemeToggle />
  </div>
{/if}
