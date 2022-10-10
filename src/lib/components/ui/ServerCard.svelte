<script lang="ts">
    import { src_url_equal } from "svelte/internal";


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
     let version: string = "latest"
     let software: string = "paper"

    function uppercaseFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    //grab server info
    const options = {
	method: 'GET',
	headers: {
		'techname': serverName
	}
};

const response = fetch('https://api.arthmc.xyz/server', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
