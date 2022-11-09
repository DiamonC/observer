<script lang="ts">
  import accountName from "$lib/stores/token";
  import accountIcon from "$lib/stores/accountIcon";
  type loginStatus = "login" | "nologin";

  export let loginStatus: string;
</script>

{#if loginStatus === "login"}
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        for="profileDropdown"
        class="btn btn-ghost btn-circle avatar"
      >
        <div class="w-10 rounded-full">
          <img src={$accountIcon} alt="profile avatar" />
        </div>
      </label>
      <ul
        id="profileDropdown"
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
      >
        <li>
          <p class="justify-between">
            {$accountName} <span class="badge">Admin</span>
          </p>
        </li>
        <li><a>Profile</a></li>
        <li><a>Account Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
{:else if loginStatus === "nologin"}
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
