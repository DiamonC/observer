<script>
  import Helper from "$lib/components/ui/Helper.svelte";
</script>

<div class="flex justify-center">
  <div class="flex flex-col max-w-2xl">
    <div class="divider px-10 text-3xl font-semibold">Webpanel Settings</div>
    <p class="text-center mt-2">
      This text section should explain what this page is for! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Adipisci natus sapiente ducimus
      nihil. Iste labore, sapiente maxime aut, rem accusamus sint porro
      inventore, temporibus sequi quae quos numquam deserunt asperiores!
    </p>
    <div class="divider text-xl font-semibold mt-8">General Settings</div>
    <form id="settingsForm">
      <label class="label" for="3">Webpanel URL</label>
      <div class="flex space-x-2">
        <input
          id="3"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder="ex: https://localhost:5173"
        />
        <Helper
          tooltipText="This is the URL you use to get to this panel! It will most likely look something like 'https://localhost:5173'."
        />
      </div>

      <label class="label" for="3">Webpanel Title</label>
      <div class="flex space-x-2">
        <input
          id="3"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder="ex: Panel"
        />
      </div>

      <label class="label cursor-pointer">
        <span class="label-text">Paynment & Billing Features</span>
        <input type="checkbox" class="toggle toggle-primary" checked />
      </label>

      <div class="divider text-xl font-semibold mt-8 mb-6">Trusted Domains</div>

      <p>
        To protect your machine from users uploading malware posing as
        plugins/mods, you can limit URLs to download from sites such as <a
          class="link link-primary"
          href="https://modrinth.com">modrinth</a
        >. Please seperate domains with commas!
      </p>
      <input
        id="3"
        class="input-bordered input-primary input w-full max-w-xs bg-base-300 my-4"
        type="text"
        placeholder="ex: modrinth.com,example.com"
      />

      <div>
        <input type="submit" value="Save" class="btn btn-block" />
      </div>
    </form>
  </div>
</div>
