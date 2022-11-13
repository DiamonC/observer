<script>
  import EmailSignin from "$lib/components/ui/EmailSignin.svelte";
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Admin Signin</h1>
      <p class="py-6">
        Are you a user? Don't know what this means? Click <a
          class="link"
          href="/signin">here</a
        >.
      </p>
      <div
        class="mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center"
      >
        <a href="https://api.arthmc.xyz/discord/login"
          ><button class="btn btn-primary btn-icon-text text-2xs"
            ><img
              alt="Discord Logo"
              style="width:2.5ch"
              src="../discord.ico"
            />Sign in with Discord</button
          ></a
        >
        <button class="btn btn-primary btn-icon-text text-2xs btn-disabled"
          ><img
            alt="metamastk logo"
            style="width:2.5ch"
            src="https://metamask.io/icons/icon-96x96.png?v=48400a28770e10dd52a8c0e539aeb282"
          />MetaMask (Coming Soon)</button
        >
      </div>
      <EmailSignin />
    </div>
  </div>
</div>
