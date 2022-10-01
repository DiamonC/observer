<script>
    import accountName from "$lib/stores/accountName"
    import accountIcon from "$lib/stores/accountIcon"
</script>

<div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
        <label
            tabindex="0"
            for="profileDropdown"
            class="btn btn-ghost btn-circle avatar"
        >
            <div class="w-10 rounded-full">
                <img
                    src="{$accountIcon}"
                    alt="profile avatar"
                />
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