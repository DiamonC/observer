
import { writable } from 'svelte/store';
export const settings = writable({
  webname: 'Your Servers',
  webtitle: 'Your Servers',
  webport: '3000',
  trustedDomains: 'modrinth.com,curseforge.com',
  enablePay: true
});