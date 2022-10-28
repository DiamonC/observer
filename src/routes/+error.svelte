<script lang="ts">
  import Footer from "$lib/components/layout/Footer.svelte";
  import Navbar from "$lib/components/layout/Navbar.svelte";
</script>

<div>
  <Navbar navType="default" />
  <slot />
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">404 Not Found</h1>
        <p class="py-6">
          This page doesn't exist! If you think this is an error, open an issue
          on our <a
            href="https://github.com/diamonc/observer/issues"
            class="link link-primary">github.</a
          >
        </p>
        <button class="btn btn-primary"
          ><a href="/">Go back to Servers</a></button
        >
      </div>
    </div>
  </div>
  <Footer navType="default" />
</div>
