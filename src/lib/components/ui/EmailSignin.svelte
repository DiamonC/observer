<script>
  import { onMount } from "svelte";
  let goodPwd = true;

  function handleClick() {
    console.log("hi");
  }
</script>

<div class="divider" />
<div class="hero bg-base-300 border-dashed border-2 border-base-400 rounded ">
  <div class="hero-content text-center">
    <div class="max-w-md space-y-5">
      {#if goodPwd === false}
        <div class="badge badge-error gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-4 h-4 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            /></svg
          >
          Your password must be 8 characters long.
        </div>
      {/if}
      <p class="text-xl">Sign in via Email:</p>
      <input
        id="hi"
        type="text"
        placeholder="Email Address"
        class="input w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Password"
        class="input max-w-md max-w-xs"
      />
      <button on:click={handleClick} class="btn btn-primary">Submit</button>
    </div>
  </div>
</div>
