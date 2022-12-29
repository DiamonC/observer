<script>
  import EmailSignin from "$lib/components/ui/EmailSignin.svelte";

  import { t, locale, locales } from "$lib/scripts/i18n";
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{$t("signin.title")}</h1>
      <p class="py-6">{$t("signin.h")}</p>
      <div
        class="mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center"
      >
        <button class="btn btn-primary btn-icon-text text-2xs btn-disabled"
          ><img
            alt="microsoft logo"
            style="width:2.5ch"
            src="discord.ico"
          />{$t("signin.discord")}</button
        >
        <button class="btn btn-primary btn-icon-text text-2xs btn-disabled"
          ><img
            alt="metamastk logo"
            style="width:2.5ch"
            src="metamask.png"
          />{$t("signin.metamask")}</button
        >
      </div>
      <EmailSignin />
    </div>
  </div>
</div>
