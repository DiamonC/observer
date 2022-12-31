<script lang="ts">
  import ThemeToggle from "./../buttons/ThemeToggle.svelte";
  import AccountButton from "./../buttons/AccountButton.svelte";
  import Home from "./../buttons/Home.svelte";
  import Billing from "./../buttons/Billing.svelte";
  import NewServer from "./../buttons/NewServer.svelte";
  import Settings from "./../buttons/Settings.svelte";
  import { browser } from "$app/environment";
  import { t, locale, locales } from "$lib/scripts/i18n";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { url } from "inspector";
  import { setDefaultResultOrder } from "dns";


  //sends user to /signin if localstorage token is ""
  if (browser) {
    if (localStorage.getItem("token") == "") {
      goto("/signin");
    }

    
  }
  let enablePay = true;
  let login = false;
  type NavType = "default" | "welcome";
  if (typeof navigator !== "undefined") {
    console.log(navigator.language);

    //set locale to the browser's language
    locale.set(navigator.language);
  }
  if (browser) {
    console.log("yooooo" + window.location.pathname)
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
  

onMount(async () => {
  if (browser) {
    //switch for your url
    check();
    
      
  }
});

   

function check() {
  setTimeout(function () {


  switch (window.location.pathname) {
  case "/":
  document.getElementById("servers").classList.add("text-accent-content");
        document.getElementById("servers2").classList.add("text-accent-content");

        document.getElementById("pay").classList.remove("text-accent-content");
        document.getElementById("newserver").classList.remove("text-accent-content");
        break;
      case "/pay":
        document.getElementById("pay").classList.add("text-accent-content");

        document.getElementById("servers").classList.remove("text-accent-content");
        document.getElementById("servers2").classList.remove("text-accent-content");
        document.getElementById("newserver").classList.remove("text-accent-content");
        break;
      case "/newserver":
        document.getElementById("newserver").classList.add("text-accent-content");

        document.getElementById("servers").classList.remove("text-accent-content");
        document.getElementById("servers2").classList.remove("text-accent-content");
        document.getElementById("pay").classList.remove("text-accent-content"); 
        break;
    }
  }, 100);
}


</script>

{#if navType === "default"}
  <div class="navbar bg-base-300 px-4" on:click={check}>
    <div class="hidden sm:block flex-1">
      <a class="btn btn-ghost normal-case text-xl invisible sm:visible" href="/"
        ><img src="/images/sitelogo.svg" alt="Arth" width="75" height="75" /></a
      >
    </div>
    <div class="flex-1 md:flex-none space-x-2 navbar-end">
      <ul class="invisible md:visible md:space-x-0 menu menu-horizontal p-0" id="servers">
        <li>
          <a href="/" class="nav btn btn-ghost rounded-lg ">{$t("navbar.servers")}</a
          >
          <!-- todo: get font back to normal and find out why the button is square-->
        </li>

      </ul>

      <Home/>



      {#if enablePay === true}
        <Billing />
      {/if}
      <NewServer />
      <ThemeToggle />
      <AccountButton loginStatus={login} />
    </div>
    
  </div>
{:else if navType === "welcome"}
  <div class="navbar fixed justify-between px-6">
    <img src="/images/sitelogo.svg" alt="Arth" width="75" height="75" />

    <ThemeToggle />
  </div>
{/if}
