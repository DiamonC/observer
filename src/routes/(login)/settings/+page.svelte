<script>
  import Helper from "$lib/components/ui/Helper.svelte";
</script>

<div class="flex justify-center">
  <div class="flex flex-col max-w-2xl">
    <div class="divider px-10 text-3xl font-semibold">Webpanel Settings</div>
    <p class="text-center mt-2">
      Here you can find all the settings that affect this panel, such as site
      URL, and trusted domains.
    </p>
    <div class="divider text-xl font-semibold mt-8">General Settings</div>
    <form id="settingsForm">
      <label class="label" for="3">Webpanel Port</label>
      <div class="flex space-x-2">
        <input
          id="3"
          class="input-bordered input-primary input w-full max-w-xs bg-base-300"
          type="text"
          placeholder="ex: 2048"
        />
        <Helper
          tooltipText="This is the port that this panel will run on (2048 by default). If you're not using a reverse proxy, you will see :port after the hostname in the URL."
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
