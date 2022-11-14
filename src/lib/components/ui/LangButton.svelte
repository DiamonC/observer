<script>
  import { t, locale, locales } from "$lib/scripts/i18n";

  //console log the browser's language if navigator is defined
  if (typeof navigator !== "undefined") {
    console.log(navigator.language);

    //set locale to the browser's language
    locale.set(navigator.language);
  }
</script>

<div class="flex-none gap-2">
  <div class="dropdown dropdown-end">
    <label tabindex="0" for="profileDropdown" class="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-globe"
        ><circle cx="12" cy="12" r="10" /><line
          x1="2"
          y1="12"
          x2="22"
          y2="12"
        /><path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        /></svg
      >
    </label>
    <ul
      id="profileDropdown"
      tabindex="0"
      class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
    >
      <li><a>English<span class="badge invisible">Selected</span></a></li>
      <li><a>Español<span class="badge invisible">Selected</span></a></li>
    </ul>
  </div>
</div>
