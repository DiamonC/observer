<script>
    import Navbar from "$lib/components/layout/Navbar.svelte"
    import "../app.css"

    import { onMount } from "svelte"
    import { themeChange } from "theme-change"

    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })
</script>

<div>
    <Navbar />
    <div class="m-8">
        <slot />
    </div>
</div>
