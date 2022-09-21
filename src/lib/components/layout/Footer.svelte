<script lang="ts">
    let Webname = "Arth Panel"

    type NavType = "default" | "welcome"

    export let navType: NavType
</script>

{#if navType === "default"}
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
            <p>
                {Webname}, licensed under
                <a
                    href="https://github.com/DiamonC/observer/blob/master/LICENSE"
                    class="link link-primary">GPLv3</a
                >, {new Date().getFullYear()}.
            </p>
        </div>
    </footer>
{:else}
    <div class="footer footer-center fixed bottom-0 p-4">
        <div>
            <p>
                {Webname}, licensed under
                <a
                    href="https://github.com/DiamonC/observer/blob/master/LICENSE"
                    class="link link-primary">GPLv3</a
                >, {new Date().getFullYear()}.
            </p>
        </div>
    </div>
{/if}
