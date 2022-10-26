<script>
  import { onMount } from "svelte";
  let goodPwd = true;
  let matchPwd = true;

  //set goodPwd to false if length of the element with id="pwd" is less than 8
  function checkPwd() {
    if (document.getElementById("pwd").value.length < 8) {
      goodPwd = false;
    } else {
      goodPwd = true;
    }
    console.log(goodPwd);
    if (
      document.getElementById("pwd").value !=
      document.getElementById("confPwd").value
    ) {
      matchPwd = false;
    } else {
      matchPwd = true;
    }
    console.log(matchPwd);
  }
  let sign;
  //give the element with id="pwd" the class "tab-active"
  function signUp() {
    document.getElementById("sup").classList.add("tab-active");
    //remove the class "tab-active" from the element with id="sin"
    document.getElementById("sin").classList.remove("tab-active");
    sign = "up";
  }
  function signIn() {
    document.getElementById("sin").classList.add("tab-active");
    //remove the class "tab-active" from the element with id="sin"
    document.getElementById("sup").classList.remove("tab-active");
    sign = "in";
  }

  /*
  const createUser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("pwd").value,
    }),
  };

  const response = fetch("http://localhost:8090", createUser)
    .then((res) => res.text())
    //.then((text) => console.log(text))
    .catch((err) => console.error(err));
  */
  //run the function signIn() when the page loads
  onMount(() => {
    signUp();
    createUser();
  });
</script>

<div class="divider" />
<div class="tabs ">
  <a id="sup" on:click={signUp} class="tab tab-lifted">Signup</a>
  <a id="sin" on:click={signIn} class="tab tab-lifted">Signin</a>
</div>
{#if sign === "in"}
  <div
    class="hero bg-base-300 border-dashed border-2 border-accent-content rounded "
  >
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
          id="email"
          type="text"
          placeholder="Email Address"
          class="input w-full max-w-xs"
        />
        <div class="space-x-2 space-y-5">
          <input
            type="text"
            id="pwd"
            placeholder="Password"
            class="input w-full max-w-xs"
          />

          <button on:click={checkPwd} class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div
    class="hero bg-base-300 border-dashed border-2 border-accent-content rounded "
  >
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
        {#if matchPwd === false}
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
            Your passwords do not match.
          </div>
        {/if}
        <p class="text-xl">Sign up via Email:</p>
        <input
          id="email"
          type="text"
          placeholder="Email Address"
          class="input w-full max-w-xs"
        />
        <input
          type="text"
          id="pwd"
          placeholder="Password"
          class="input w-full max-w-xs"
        />
        <div class="space-x-2 space-y-5">
          <input
            type="text"
            id="confPwd"
            placeholder="Confirm Password"
            class="input w-full max-w-xs"
          />
          <button on:click={checkPwd} class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
{/if}
