import { c as create_ssr_component, v as validate_component } from './index-4b33a228.js';
import { N as Navbar, F as Footer } from './Footer-7d91f6a1.js';
import './accountEmail-0887a83d.js';
import './i18n-5de95841.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, { navType: "welcome" }, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, { navType: "welcome" }, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c98334cd.js.map
