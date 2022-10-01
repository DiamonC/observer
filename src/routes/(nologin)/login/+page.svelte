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

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome Back!</h1>
            <p class="py-6">
                Login to your account or <a
                    class="link link-primary"
                    href="/signup">sign up.</a
                >
            </p>
            <div
                class="mt-1 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center"
            >
                <button class="btn btn-primary btn-icon-text"
                    ><img
                        alt="microsoft logo"
                        style="width:2.5ch"
                        src="https://microsoft.com/favicon.ico"
                    />Login with Microsoft</button
                >
                <button class="btn btn-primary btn-icon-text"
                    ><img
                        alt="metamastk logo"
                        style="width:2.5ch"
                        src="https://metamask.io/icons/icon-96x96.png?v=48400a28770e10dd52a8c0e539aeb282"
                    />Login with MetaMask</button
                >
            </div>
        </div>
    </div>
</div>

