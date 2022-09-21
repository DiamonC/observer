<script lang="ts">
    //
</script>

<div class="flex place-content-center">
    <div class="flex-col mb-10">
        <div class="divider px-10 text-3xl font-semibold">New Server</div>
        <div id="serverForm">
            <form>
                <div class="flex flex-col w-[22rem]">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label" for="softwareDropdown"
                        >Choose Software...</label
                    >
                    <select
                        id="softwareDropdown"
                        name="softwareDropdown"
                        tabindex="0"
                        class="select select-primary p-2 bg-base-100"
                    >
                        <div class="divider">Featured</div>
                        <option>Vanilla</option>
                        <option>Paper</option>
                        <option>Velocity</option>
                        <option>Waterfall</option>
                        <option>Forge</option>
                        <div class="divider">Other</div>
                        <option>Fabric</option>
                        <option>Mohist</option>
                        <option>Snapshot</option>
                        <option>Spigot</option>
                    </select>
                    <label class="label" for="1">Server Name</label>
                    <input
                        id="1"
                        class="input-bordered input-primary input w-full bg-base-300"
                        type="text"
                        placeholder="ex: My Minecraft Server"
                    />

                    <label class="label" for="2">Technical Server Name</label>
                    <input
                        id="2"
                        class="input-bordered input-primary input w-full bg-base-300"
                        type="text"
                        placeholder="ex: my_minecraft_server"
                    />

                    <label class="label" for="3">Minecraft version:</label>
                    <input
                        id="3"
                        class="input-bordered input-primary input w-full bg-base-300"
                        type="text"
                        placeholder="ex: latest, 1.16.5"
                    />
                    <button type="submit" class="btn mt-4">Create Server</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>
