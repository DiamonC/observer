import { w as writable } from './index-4b33a228.js';

const defaultValue$1 = true;
const initialValue$1 = defaultValue$1;
const darkMode = writable(initialValue$1);
darkMode.subscribe((value) => {
  value.toString();
});
const defaultValue = "No Email Found. Are you logged in?";
const initialValue = defaultValue;
const accountEmail = writable(initialValue);
accountEmail.subscribe((value) => {
  value.toString();
});

export { accountEmail as a, darkMode as d };
//# sourceMappingURL=accountEmail-0887a83d.js.map
