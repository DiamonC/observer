
import { writable } from 'svelte/store';
export const settings = writable({
  webport: '3000',
  trustedDomains: 'modrinth.com,curseforge.com',
  enablePay: true
});