<script>
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import EmailSignin from "$lib/components/ui/EmailSignin.svelte";

  import { t, locale, locales } from "$lib/scripts/i18n";
  import PocketBase from 'pocketbase';
  function discord() {
    console.log("discord");
    //set token in localstorage to discord

    if (browser) {
      localStorage.setItem( "token" ,  "discord" );
      //send to discord
      goto("https://discord.com/api/oauth2/authorize?client_id=1025856388297150475&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fsignin%2Fdiscord&response_type=code&scope=email") ;
    }


  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{$t("signin.title")}</h1>
      <p class="py-6">{$t("signin.h")}</p>
      <div
        class="mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center"
      >
    <button class="btn btn-base-content btn-icon-text text-2xs btn-disabled" on:click={discord}
          ><img
            alt="microsoft logo"
            style="width:2.5ch"
            src="discord.svg"
            
          />{$t("signin.discord")}</button
        >
        <button class="btn btn-primary btn-icon-text text-2xs btn-disabled"
          ><img
            alt="metamastk logo"
            style="width:2.5ch"
            src="metamask.svg"
            
          />{$t("signin.metamask")}</button
        >
      </div>
      <EmailSignin />
    </div>
  </div>
</div>
