<script lang="ts">
  import accountEmail from "$lib/stores/accountEmail";
  type loginStatus = true | false;

  export let loginStatus: boolean;

  function signOut() {
    localStorage.setItem("token", "");
    loginStatus = false;
  }
</script>

{#if loginStatus === true}
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        for="profileDropdown"
        class="btn btn-ghost btn-circle"
      >
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
          class="feather feather-user"
          ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle
            cx="12"
            cy="7"
            r="4"
          /></svg
        >
      </label>
      <ul
        id="profileDropdown"
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
      >
        <li>
          <p class="justify-between">
            {$accountEmail}
          </p>
        </li>
        <li><a>Profile</a></li>
        <li><a>Account Settings</a></li>
        <li><a on:click={signOut}>Logout</a></li>
      </ul>
    </div>
  </div>
{:else if loginStatus === false}
  <a href="/signin" class="btn btn-ghost btn-circle">
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
      class="feather feather-log-in"
      ><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline
        points="10 17 15 12 10 7"
      /><line x1="15" y1="12" x2="3" y2="12" /></svg
    ></a
  >
{/if}
