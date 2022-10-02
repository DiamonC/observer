<script lang="ts">
    //
    import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://panel.arthmc.xyz/v1') // Your API Endpoint
    .setProject('63266a05bd6143aa7953') // Your project ID
;

// Go to OAuth provider login page
account.createOAuth2Session('discord','http://localhost:5173');

</script>