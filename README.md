## Pornhub-Discord-RPC

• got bored lol.

• ignore my poor coding

• special thanks to the creators of [discord-rpc](https://github.com/discordjs/RPC) and [pornhub.js](https://github.com/pionxzh/pornhub.js) for allowing me to create this useless project.

## Installation (Part 1)

im not really good at this 😢.
this is how i would normally do it.

1. Download Git from [here](https://git-scm.com/downloads)
2. Download NodeJS from [here](https://nodejs.org/en/)
3. Install `forever` by installing it. More info [here](https://www.npmjs.com/package/forever)
4. Open up windows powershell, and do the following:

```bash
$ git clone https://github.com/photosensory/pornhub-discord-rpc.git
$ cd path-to-repo
$ npm install
$ npm install -D dotenv
$ forever start index.ts
```

5. Profit

## Installation (Part 2)

(how to make it do the thing)

1. Go to the [Discord Developer Portal](https://discord.com/developers)
2. Create an application. You'll need to note a few things such as it's client ID.
3. You will need to upload the PornHub logo called `ph_icon` under the rich presence assets.
4. Create a .env file and copy and paste the code below:

```
CLIENT_ID=client_id_here
IMAGE_KEY=ph_icon
```

(replace client_id_here with the client id)

5. now run `forever start index.js` and it should work.

## idk what to call this

1. How to stop the process
- Just run `forever stop 0`