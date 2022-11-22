import { c as create_ssr_component, v as validate_component } from './index-4b33a228.js';
import { N as Navbar, F as Footer } from './Footer-7d91f6a1.js';
import './accountEmail-0887a83d.js';
import './i18n-5de95841.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, { navType: "default" }, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  <div class="${"hero min-h-screen"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">404 Not Found</h1>
        <p class="${"py-6"}">This page doesn&#39;t exist! If you think this is an error, open an issue
          on our <a href="${"https://github.com/diamonc/observer/issues"}" class="${"link link-primary"}">github.</a></p>
        <button class="${"btn btn-primary"}"><a href="${"/"}">Go back to Servers</a></button></div></div></div>
  ${validate_component(Footer, "Footer").$$render($$result, { navType: "default" }, {}, {})}</div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-9a8ae3cb.js.map
