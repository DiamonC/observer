import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from './index-4b33a228.js';
import { E as EmailSignin } from './EmailSignin-7a400d37.js';
import { t } from './i18n-5de95841.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">${escape($t("signin.title"))}</h1>
      <p class="${"py-6"}">${escape($t("signin.h"))}</p>
      <div class="${"mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center"}"><button class="${"btn btn-primary btn-icon-text text-2xs btn-disabled"}"><img alt="${"microsoft logo"}" style="${"width:2.5ch"}" src="${"discord.ico"}">${escape($t("signin.discord"))}</button>
        <button class="${"btn btn-primary btn-icon-text text-2xs btn-disabled"}"><img alt="${"metamastk logo"}" style="${"width:2.5ch"}" src="${"https://metamask.io/icons/icon-96x96.png?v=48400a28770e10dd52a8c0e539aeb282"}">${escape($t("signin.metamask"))}</button></div>
      ${validate_component(EmailSignin, "EmailSignin").$$render($$result, {}, {}, {})}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a7737dec.js.map
