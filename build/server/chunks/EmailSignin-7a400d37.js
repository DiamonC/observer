import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from './index-4b33a228.js';
import { t } from './i18n-5de95841.js';

const EmailSignin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="${"divider"}"></div>
<div class="${"tabs "}"><a id="${"sin"}" class="${"tab tab-lifted tab-active"}">${escape($t("signin"))}</a>
  <a id="${"sup"}" class="${"tab tab-lifted"}">${escape($t("signup"))}</a></div>
${`<div class="${"hero bg-base-300 border-dashed border-2 border-accent-content rounded "}"><div class="${"hero-content text-center"}"><div class="${"max-w-md space-y-5"}">${``}
        <p class="${"text-xl"}">${escape($t("signin.h.email"))}</p>
        <input id="${"email"}" type="${"text"}"${add_attribute("placeholder", $t("signin.l.email"), 0)} class="${"input w-full max-w-xs"}">
        <div class="${"space-x-2 space-y-5"}"><input type="${"password"}" id="${"pwd"}"${add_attribute("placeholder", $t("signin.l.pwd"), 0)} class="${"input w-full max-w-xs"}">

          <button class="${"btn btn-primary"}">Submit</button></div></div></div></div>`}`;
});

export { EmailSignin as E };
//# sourceMappingURL=EmailSignin-7a400d37.js.map
