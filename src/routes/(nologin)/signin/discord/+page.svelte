<script>
  import { browser } from "$app/environment";
  import { disableScrollHandling } from "$app/navigation";
  import EmailSignin from "$lib/components/ui/EmailSignin.svelte";

  import PocketBase from 'pocketbase';

    if (browser) {
        //take the code from the url
    let code = window.location.search.split('code=')[1];
    console.log(code)
        discord(code);
    }

    async function discord(code) {
        const pb = new PocketBase('https://pb.arthmc.xyz/');

const authData = await pb.collection('users').authWithOAuth2(
    'discord',
    code,
    'VERIFIER',
    'https://servers.arthmc.xyz/pay/',

);

console.log(authData)
    }







</script>