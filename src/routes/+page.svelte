<script lang="ts">
    import darkMode from "$lib/stores/darkMode"
    import { onMount } from "svelte"
    import { missing_component } from "svelte/internal"
    import { themeChange } from "theme-change"

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })

    //Example
    let ServerName = "Server Name"
    let name = "world"

    //Icons
    let paperico =
        "https://raw.githubusercontent.com/modrinth/art/a05e2307b42762d64a370a3cf3e8b6b30735dce1/Icons/Paper.svg"

    var id = 0
    var servercreate = false
    const serverName = []
    const serverLoader = []
    const serverVersion = []
    function newserver() {}
</script>

<template>
    <!-- TODO: all icons should probably be made into their own components or stored somewhere in $lib for cleaner code. -->

    <div class="navbar bg-base-300">
        <div class="flex-1">
            <p class="normal-case text-xl">Observer</p>
        </div>
        <div class="flex-none">
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
            <a href="/pay" class="btn btn-ghost btn-circle btn-icon"
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
            <button
                class="text-base-content btn btn-circle btn-icon text-3xl btn-ghost"
            >
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
            <div class="avatar placeholder">
                <div
                    class=" ring ring-primary bg-neutral-focus text-neutral-content rounded-full w-10"
                >
                    <a href="/login"><span class="text-2xl">EX</span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<body>
    <div class="pad">
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <div class="card-body">
                <h2 class="card-title">{ServerName}</h2>
                <p><b>Version:</b> Latest | <b>Software: </b>Paper</p>
                <div class="card-actions justify-beginning">
                    <button class="btn btn-error">Stop</button>
                    <button class="btn btn-success">Start</button>
                    <button class="btn btn-primary">Terminal</button>
                </div>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">1/20</div>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    body {
        margin: 0;
        padding: 0ch;
    }
    .pad {
        padding: 2ch;
    }
</style>
