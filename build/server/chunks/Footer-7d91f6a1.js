import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as add_attribute } from './index-4b33a228.js';
import { d as darkMode, a as accountEmail } from './accountEmail-0887a83d.js';
import { t, l as locale } from './i18n-5de95841.js';

const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_darkMode();
  return `<label class="${"btn btn-circle btn-ghost swap swap-rotate"}">
  <input data-toggle-theme="${"light,dark"}" data-act-class="${"ACTIVECLASS"}" type="${"checkbox"}"${add_attribute("value", $darkMode, 0)}>

  
  <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-sun swap-on"}"><circle cx="${"12"}" cy="${"12"}" r="${"5"}"></circle><line x1="${"12"}" y1="${"1"}" x2="${"12"}" y2="${"3"}"></line><line x1="${"12"}" y1="${"21"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"4.22"}" y1="${"4.22"}" x2="${"5.64"}" y2="${"5.64"}"></line><line x1="${"18.36"}" y1="${"18.36"}" x2="${"19.78"}" y2="${"19.78"}"></line><line x1="${"1"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line><line x1="${"21"}" y1="${"12"}" x2="${"23"}" y2="${"12"}"></line><line x1="${"4.22"}" y1="${"19.78"}" x2="${"5.64"}" y2="${"18.36"}"></line><line x1="${"18.36"}" y1="${"5.64"}" x2="${"19.78"}" y2="${"4.22"}"></line></svg>

  
  <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-moon swap-off"}"><path d="${"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}"></path></svg></label>`;
});
const AccountButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $accountEmail, $$unsubscribe_accountEmail;
  let $t, $$unsubscribe_t;
  $$unsubscribe_accountEmail = subscribe(accountEmail, (value) => $accountEmail = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { loginStatus } = $$props;
  if ($$props.loginStatus === void 0 && $$bindings.loginStatus && loginStatus !== void 0)
    $$bindings.loginStatus(loginStatus);
  $$unsubscribe_accountEmail();
  $$unsubscribe_t();
  return `${loginStatus === true ? `<div class="${"flex-none gap-2"}"><div class="${"dropdown dropdown-end"}"><label tabindex="${"0"}" for="${"profileDropdown"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-user"}"><path d="${"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}"></path><circle cx="${"12"}" cy="${"7"}" r="${"4"}"></circle></svg></label>
      <ul id="${"profileDropdown"}" tabindex="${"0"}" class="${"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"}"><li><p class="${"justify-between"}">${escape($accountEmail)}</p></li>
        <li><a>${escape($t("account.profile"))}</a></li>
        <li><a>${escape($t("account.settings"))}</a></li>
        <li><a>${escape($t("account.logout"))}</a></li></ul></div></div>` : `${loginStatus === false ? `<a href="${"/signin"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-log-in"}"><path d="${"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}"></path><polyline points="${"10 17 15 12 10 7"}"></polyline><line x1="${"15"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line></svg></a>` : ``}`}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"visible md:hidden"}"><a href="${"/"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-home"}"><path d="${"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}"></path><polyline points="${"9 22 9 12 15 12 15 22"}"></polyline></svg></a></div>`;
});
const Billing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"/billing"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-shopping-cart"}"><circle cx="${"9"}" cy="${"21"}" r="${"1"}"></circle><circle cx="${"20"}" cy="${"21"}" r="${"1"}"></circle><path d="${"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}"></path></svg></a>`;
});
const NewServer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"/newserver"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-plus"}"><line x1="${"12"}" y1="${"5"}" x2="${"12"}" y2="${"19"}"></line><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line></svg></a>`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"visible md:hidden"}"><a href="${"/settings"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-settings"}"><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><path d="${"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}"></path></svg></a></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let login = false;
  if (typeof navigator !== "undefined") {
    console.log(navigator.language);
    locale.set(navigator.language);
  }
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token") == null) {
      localStorage.setItem("token", "");
    }
    if (localStorage.getItem("token") !== "") {
      login = true;
    } else {
      login = false;
    }
  }
  console.log(login);
  let { navType } = $$props;
  if ($$props.navType === void 0 && $$bindings.navType && navType !== void 0)
    $$bindings.navType(navType);
  $$unsubscribe_t();
  return `${navType === "default" ? `<div class="${"navbar bg-base-300 px-4"}"><div class="${"hidden sm:block flex-1"}"><a class="${"btn btn-ghost normal-case text-xl"}" href="${"/"}">${escape($t("navbar.webname"))}</a></div>
    <div class="${"flex-1 md:flex-none space-x-2 navbar-end"}"><ul class="${"invisible md:visible md:space-x-0 menu menu-horizontal p-0"}"><li><a href="${"/"}">${escape($t("navbar.servers"))}</a></li>
        <li><a href="${"/settings"}">${escape($t("navbar.settings"))}</a></li></ul>

      ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
      ${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}
      ${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}

      ${`${validate_component(Billing, "Billing").$$render($$result, {}, {}, {})}`}
      ${validate_component(NewServer, "NewServer").$$render($$result, {}, {}, {})}

      ${validate_component(AccountButton, "AccountButton").$$render($$result, { loginStatus: login }, {}, {})}</div></div>` : `${navType === "welcome" ? `<div class="${"navbar fixed justify-between px-6"}">${validate_component(Home, "Home").$$render($$result, { class: "md:invisible" }, {}, {})}
    <a class="${"invisible md:visible btn btn-ghost normal-case text-2xl"}" href="${"/"}">${escape($t("navbar.webname"))}</a>

    ${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div>` : ``}`}`;
});
let Webname = "Arth Panel";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { navType } = $$props;
  if ($$props.navType === void 0 && $$bindings.navType && navType !== void 0)
    $$bindings.navType(navType);
  $$unsubscribe_t();
  return `${navType === "default" ? `<footer class="${"footer footer-center p-4 md:bg-base-300 text-base-content"}"><div><p>${escape(Webname)}${escape($t("site.footer"))}
        <a href="${"https://github.com/DiamonC/observer/blob/master/LICENSE"}" class="${"link link-primary"}">GPLv3</a>, ${escape(new Date().getFullYear())}.
      </p></div></footer>` : `<div class="${"footer footer-center fixed text-xs bottom-0 p-2"}"><div><p>${escape(Webname)}${escape($t("site.footer"))}
        <a href="${"https://github.com/DiamonC/observer/blob/master/LICENSE"}" class="${"link link-primary"}">GPLv3</a>, ${escape(new Date().getFullYear())}.
      </p></div></div>`}`;
});

export { Footer as F, Navbar as N };
//# sourceMappingURL=Footer-7d91f6a1.js.map
