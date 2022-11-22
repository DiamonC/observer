import { c as create_ssr_component, v as validate_component } from './index-4b33a228.js';
import { N as Navbar, F as Footer } from './Footer-7d91f6a1.js';
import './accountEmail-0887a83d.js';
import './i18n-5de95841.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col justify-between h-[100vh]"}">${validate_component(Navbar, "Navbar").$$render($$result, { navType: "default" }, {}, {})}
  <div class="${"m-8"}">${slots.default ? slots.default({}) : ``}</div>
  ${validate_component(Footer, "Footer").$$render($$result, { navType: "default" }, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-8c8975f0.js.map
