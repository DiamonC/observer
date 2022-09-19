<script lang="ts">
    type serverType =
        | "paper"
        | "spigot"
        | "bukkit"
        | "waterfall"
        | "velocity"
        | "forge"
        | "fabric"
        | "quilt"
        | "mohist"
        | "vanilla"

    export let serverName: string
    export let version: string = "latest"
    export let software: serverType

    function uppercaseFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
</script>

<div class="m-3">
    <div class="card w-96 bg-base-100 shadow-xl image-full">
        <div class="card-body">
            <h2 class="card-title">{serverName}</h2>
            <p>
                <b>Version:</b>
                {uppercaseFirstLetter(version)} |
                <b>Software: </b>{uppercaseFirstLetter(software)}
            </p>
            <!-- <div class="card-actions justify-beginning" /> -->
            <div class="card-actions justify-end pt-4">
                <!-- placeholder for now? -->
                <div class="grow space-x-0.5">
                    <button class="btn btn-error btn-sm h-9">Stop</button>
                    <button class="btn btn-success btn-sm h-9">Start</button>
                    <button class="btn btn-primary btn-sm h-9">Terminal</button>
                </div>
                <div class="self-center">
                    <div class="badge badge-outline">1/20</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    //
</style>
