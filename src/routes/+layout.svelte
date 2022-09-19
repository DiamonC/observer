<script>
    import Navbar from "$lib/components/layout/Navbar.svelte"
    import "../app.css"
</script>

<div>
    <Navbar />
    <div class="m-8">
        <slot />
    </div>
</div>
