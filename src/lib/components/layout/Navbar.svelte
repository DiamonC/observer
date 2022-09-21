<script lang="ts">
    import darkMode from "$lib/stores/darkMode"
    let Webname = "Arth Panel"
</script>

<div class="navbar bg-base-300 px-4">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">{Webname}</a>
    </div>
    <div class="flex-none space-x-2">
        <ul class="menu menu-horizontal p-0">
            <li><a href="/">Servers</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
        <label class="btn btn-circle btn-ghost swap swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input
                data-toggle-theme="light,dark"
                data-act-class="ACTIVECLASS"
                type="checkbox"
                bind:value={$darkMode}
            />

            <!-- sun icon -->
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
                class="feather feather-sun swap-on"
                ><circle cx="12" cy="12" r="5" /><line
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="3"
                /><line x1="12" y1="21" x2="12" y2="23" /><line
                    x1="4.22"
                    y1="4.22"
                    x2="5.64"
                    y2="5.64"
                /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line
                    x1="1"
                    y1="12"
                    x2="3"
                    y2="12"
                /><line x1="21" y1="12" x2="23" y2="12" /><line
                    x1="4.22"
                    y1="19.78"
                    x2="5.64"
                    y2="18.36"
                /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
            >

            <!-- moon icon -->
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
                class="feather feather-moon swap-off"
                ><path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                /></svg
            >
        </label>
        <a href="/pay" class="btn btn-ghost btn-circle"
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
        <button class="text-base-content btn btn-circle text-3xl btn-ghost">
            <a href="/newserver">
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
        </button>
        <div class="divider divider-horizontal py-1 pr-1.5" />
        <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
                <label
                    tabindex="0"
                    for="profileDropdown"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-10 rounded-full">
                        <img
                            src="https://s.namemc.com/2d/skin/face.png?id=7b5f434f34e25c37&scale=4"
                            alt="profile avatar"
                        />
                    </div>
                </label>
                <ul
                    id="profileDropdown"
                    tabindex="0"
                    class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                >
                    <li><a>Profile</a></li>
                    <li><a>Account Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
