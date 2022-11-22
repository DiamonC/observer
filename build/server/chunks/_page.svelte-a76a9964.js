import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from './index-4b33a228.js';
import { t } from './i18n-5de95841.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"flex place-content-center"}"><div class="${"flex-col mb-10"}"><div class="${"divider px-10 text-3xl font-semibold"}">${escape($t("newserver.title"))}</div>
    <div id="${"serverForm"}"><form><div class="${"flex flex-col w-[22rem]"}">
          <label class="${"label"}" for="${"softwareDropdown"}">${escape($t("newserver.l.choose"))}</label>
          <select id="${"softwareDropdown"}" name="${"softwareDropdown"}" tabindex="${"0"}" class="${"select select-primary p-2 bg-base-100"}"><option${add_attribute("value", $t("software.paper"), 0)}>${escape($t("software.paper"))}</option><option value="${"Velocity"}">Velocity</option><option value="${"Quilt"}">Quilt</option><option value="${"Vanilla"}">Vanilla</option><option value="${"Waterfall"}">Waterfall</option><option value="${"Forge"}">Forge</option><option value="${"Fabric"}">Fabric</option><option value="${"Mohist"}">Mohist</option><option value="${"Snapshot"}">Snapshot</option><option value="${"Spigot"}">Spigot</option></select>
          <label class="${"label"}" for="${"1"}">${escape($t("newserver.l.name"))}</label>
          <input id="${"nameInput"}" class="${"input-bordered input-primary input w-full bg-base-300"}" type="${"text"}" placeholder="${escape($t("general.ex"), true) + " My Minecraft Server"}">

          <label class="${"label"}" for="${"3"}">${escape($t("newserver.l.version"))}</label>
          <input id="${"versionInput"}" class="${"input-bordered input-primary input w-full bg-base-300"}" type="${"text"}" placeholder="${escape($t("general.ex"), true) + " latest, 1.16.5"}">
          <button type="${"submit"}" class="${"btn mt-4"}">${escape($t("button.createServer"))}</button></div></form></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a76a9964.js.map
