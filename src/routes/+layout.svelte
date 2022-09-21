<script>
    import Navbar from "$lib/components/layout/Navbar.svelte"
    import "../app.css"

    import { onMount } from "svelte"
    import { themeChange } from "theme-change"
    import Footer from "$lib/components/layout/Footer.svelte"

    onMount(() => {
        themeChange(false)
        // 👆 false parameter is required for svelte
    })
    // will break if not used here
</script>

<div class="flex flex-col justify-between h-[100vh]">
    <Navbar />
    <div class="m-8">
        <slot />
    </div>
    <Footer />
</div>
