import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from './index-4b33a228.js';
import { t } from './i18n-5de95841.js';

let version = "latest";
let software = "paper";
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const ServerCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let stopcolor = "info";
  let startcolor = "info";
  let starttext = "Start";
  let { serverName } = $$props;
  function status() {
    {
      stopcolor = "disabled";
      startcolor = "success";
      starttext = "Start";
    }
  }
  status();
  if ($$props.serverName === void 0 && $$bindings.serverName && serverName !== void 0)
    $$bindings.serverName(serverName);
  $$unsubscribe_t();
  return `<div class="${"m-3"}"><div class="${"card w-96 bg-base-100 shadow-xl image-full"}"><div class="${"card-body"}"><h2 class="${"card-title"}">${escape(serverName)}</h2>
      <p><b>Version:</b>
        ${escape(uppercaseFirstLetter(version))} |
        <b>Software: </b>${escape(uppercaseFirstLetter(software))}</p>
      
      <div class="${"card-actions justify-end pt-4"}">
        <div class="${"grow space-x-0.5"}"><button class="${"btn btn-primary btn-sm h-9"}">${escape($t("button.terminal"))}</button>
          <button type="${"submit"}" class="${"btn btn-" + escape(startcolor, true) + " btn-sm h-9"}">${escape(starttext)}</button>
          <button class="${"btn btn-" + escape(stopcolor, true) + " btn-sm h-9 stop-btn"}">${escape($t("button.stop"))}</button></div>
        <div class="${"self-center"}"><div class="${"badge badge-outline"}">1/20</div></div></div></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"flex flex-col items-center space-y-20 mb-12"}"><div><div class="${"divider px-10 text-3xl font-semibold"}">${escape($t("homepage.title"))}</div>
    <div class="${"flex flex-wrap justify-center"}">${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is such a cool Server Name!"
    },
    {},
    {}
  )}
      ${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is a second Server Name!"
    },
    {},
    {}
  )}
      ${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is a third Server Name!"
    },
    {},
    {}
  )}
      ${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is a fourth Server Name!"
    },
    {},
    {}
  )}
      ${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is a fifth Server Name!"
    },
    {},
    {}
  )}
      ${validate_component(ServerCard, "ServerCard").$$render(
    $$result,
    {
      serverName: "This is a sixth Server Name!"
    },
    {},
    {}
  )}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cb7a0ee0.js.map
