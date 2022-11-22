import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as add_attribute, w as writable } from './index-4b33a228.js';
import { t } from './i18n-5de95841.js';

const settings = writable({
  webport: "3000",
  trustedDomains: "modrinth.com,curseforge.com",
  enablePay: true
});
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tooltipText } = $$props;
  if ($$props.tooltipText === void 0 && $$bindings.tooltipText && tooltipText !== void 0)
    $$bindings.tooltipText(tooltipText);
  return `<div class="${"tooltip tooltip-bottom"}"${add_attribute("data-tip", tooltipText, 0)}><div class="${"btn btn-circle btn-ghost btn-md"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-help-circle"}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}"></path><line x1="${"12"}" y1="${"17"}" x2="${"12.01"}" y2="${"17"}"></line></svg></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $settings, $$unsubscribe_settings;
  let $t, $$unsubscribe_t;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $settings.webname;
  $settings.webtitle;
  $settings.webtitle;
  $settings.webtitle;
  $settings.enablePay;
  $$unsubscribe_settings();
  $$unsubscribe_t();
  return `<div class="${"flex justify-center"}"><div class="${"flex flex-col max-w-2xl"}"><div class="${"divider px-10 text-3xl font-semibold"}">${escape($t("settings.title"))}</div>
    <p class="${"text-center mt-2"}">${escape($t("settings.desc"))}</p>
    <div class="${"divider text-xl font-semibold mt-8"}">${escape($t("settings.h.general"))}</div>
    <form id="${"settingsForm"}"><label class="${"label"}" for="${"3"}">${escape($t("settings.l.webport"))}</label>
      <div class="${"flex space-x-2"}"><input id="${"3"}" class="${"input-bordered input-primary input w-full max-w-xs bg-base-300"}" type="${"text"}" placeholder="${escape($t("general.ex"), true) + " 3000"}">
        ${validate_component(Helper, "Helper").$$render($$result, { tooltipText: $t("settings.t.webport") }, {}, {})}</div>

      <label class="${"label"}" for="${"3"}">${escape($t("settings.l.webtitle"))}</label>
      <div class="${"flex space-x-2"}"><input id="${"webtitle"}" class="${"input-bordered input-primary input w-full max-w-xs bg-base-300"}" type="${"text"}"${add_attribute("placeholder", $t("site.webtitle"), 0)}></div>

      <label class="${"label"}" for="${"3"}">${escape($t("settings.l.webname"))}</label>
      <div class="${"flex space-x-2"}"><input id="${"webname"}" class="${"input-bordered input-primary input w-full max-w-xs bg-base-300"}" type="${"text"}"${add_attribute("placeholder", $t("navbar.webname"), 0)}></div>

      <label id="${"payEnable"}" class="${"label cursor-pointer"}"><span class="${"label-text"}">${escape($t("settings.l.pay"))}</span>
        <input id="${"payEnable"}" type="${"checkbox"}" class="${"toggle toggle-primary"}" checked></label>

      <div class="${"divider text-xl font-semibold mt-8 mb-6"}">${escape($t("settings.h.trusted"))}</div>

      <p>${escape($t("settings.desc.trusted"))}</p>
      <input id="${"3"}" class="${"input-bordered input-primary input w-full max-w-xs bg-base-300 my-4"}" type="${"text"}" placeholder="${"ex: modrinth.com,example.com"}">

      <div><input type="${"submit"}"${add_attribute("value", $t("button.save"), 0)} class="${"btn btn-block"}"></div></form></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fbbfbe61.js.map
