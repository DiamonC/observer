<script lang="ts">
    import darkMode from "$lib/stores/darkMode"
    import { onMount } from "svelte"
    import { themeChange } from "theme-change"

    import ServerCard from "$lib/components/ui/ServerCard.svelte"

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

<svelte:head>
    <title>Observer</title>
</svelte:head>

<template>
    <!-- TODO: all icons should probably be made into their own components or stored somewhere in $lib for cleaner code. -->
</template>
<body>
    <div class="flex flex-wrap">
        <ServerCard
            serverName="This is such a cool Server Name!"
            software="paper"
        />
        <ServerCard
            serverName="This is a second Server Name!"
            software="quilt"
        />
        <ServerCard
            serverName="This is a third Server Name!"
            software="forge"
        />
        <ServerCard
            serverName="This is a fourth Server Name!"
            software="waterfall"
        />
        <ServerCard
            serverName="This is a fifth Server Name!"
            software="velocity"
        />
        <ServerCard
            serverName="This is a sixth Server Name!"
            software="spigot"
        />
    </div>
</body>

<style>
    body {
        margin: 0;
        padding: 0ch;
    }
</style>
