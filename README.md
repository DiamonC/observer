[![Get at Docker Hub](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/arthmc/observer)
# About Observer

Observer is a frontend for Arth Panel, an open-source & self-hosted minecraft server panel. Observer is meant to be run as a docker container, and is made with HTML/CSS/JS, Node, SvelteKit, TailwindCSS, and DaisyUI. For testing purposes, there is an instance of observer running at https://servers.arthmc.xyz/

## How to Run

1. Download the image from docker hub with the command `sudo docker pull arthmc/observer:latest`
2. Run the image with `sudo docker run -p 3000:3000 arthmc/observer:latest`. To change the port, replace the first 3000 with the port number you want.

# Contributing

- Make sure you install the pagackes by running `npm i`
- To run a dev server, enter the command `npm run dev`
- If you need to mimic a production environment for something like working with Service Workers, enter `npm run preview` instead.

## Contributing Guidelines

- Please format your code with the Svelte for VS Code extension, or an alternative that achieves the same results.  
- Please use [feather](https://feathericons.com) for svg icons & use webp for raster images whenever possible. If you're wondering what tools have been used to make images like the arth logo (seen on arthmc.xyz) and the favicon, they were made with Lunacy.

### Check out our [backend](https://github.com/arthmc/quartz)'s progress  

## Why Arth Panel?
The main difference between an alternative like pufferpanel or pterodactyl is that it's meant to work in a way so that if an issue were to occur, you could easily just SSH into the machine and run the jar directly in a folder, so you know that your server's uptime is not dependant on a panel someone else made working flawlessly.  

## Planned Pages

```
/servers (Where all servers you have access too are listed)
/settings (Configure things like site URL)
/newserver (Page to create a new server)
/server/[server technicalname] (page showing eventually terminal)
/signin
/account (manage account/profile)
/billing (add to your balance and view your balance as well as next charges)
```

# To-do list
✅ Setup a basic node application with Svelte, Tailwind, & DaisyUI.  
✅ Navbar with Arth Panel, Servers, & Settings on left. On right: Night/darkmode button, Create server button, Account button.  
✅ Basic UI for all planned pages  
🔨 Communication with backend  
❌ Basic UI and function for terminal on the frontend  
❌ Balance deposits & withdraws with paypal  
❌ Web Terminal using WebSockets  
❓ Balance deposits & withdraws with stripe  
❓ Decentralized options for accounts and/or paynments  
