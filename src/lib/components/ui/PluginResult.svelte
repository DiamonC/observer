<script lang="ts">
    import { getVersions } from "$lib/scripts/req";

    import ChooseVersion from "$lib/components/ui/ChooseVersion.svelte";
  import { browser } from "$app/environment";

     
  export let name: string;
  export let author: string;
  export let desc: string;
  export let icon: string;
  export let id: string;

  function get() {
    getVersions(id).then((data) => {
      console.log(data);
    });
  }
  let software = "";
  let version = "";
if (browser) {
    software = localStorage.getItem("serverSoftware");
    version = localStorage.getItem("serverVersion");
}
</script>

<div class="bg-base-200 rounded-lg p-3">
    <div class="flex justify-between place-items-center">
        <div class="flex space-x-3">
            <img src={icon} alt="noicon" class="w-14 h-14 bg-base-300 rounded-lg text-sm" />
            <div>
                <div class="flex space-x-1"><p class="text-xl font-bold">{name}</p><div class="flex space-x-1 place-items-end"><p>by</p><a href="https://modrinth.com/user/{author}" target="_blank" class="link">{author}</a></div></div>
        <p>{desc}</p>
            </div>
            
        </div>
        <ChooseVersion id={id} />
    </div>
</div>