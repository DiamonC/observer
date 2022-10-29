
import { writable } from 'svelte/store';
export const backend = writable({
  pburl: 'http://localhost:8090/api/',
  apiurl: 'https://api.arthmc.xyz/',
});