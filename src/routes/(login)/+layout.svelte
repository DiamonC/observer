<script>
    import Navbar from "$lib/components/layout/Navbar.svelte"
    import Footer from "$lib/components/layout/Footer.svelte"
</script>

<div class="flex flex-col justify-between h-[100vh]">
    <Navbar />
    <div class="m-8">
        <slot />
    </div>
    <Footer />
</div>
