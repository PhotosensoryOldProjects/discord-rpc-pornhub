<p align="center">
    <strong>PornHub Discord RPC</strong>  </br>
    <strong>Special Thanks: <a href="https://github.com/discordjs/RPC">discord-rpc</a> & <a href="https://github.com/pionxzh/pornhub.js">pornhub.js</a></strong>
</p>

<p align="center">
  <a href="#installation">Installation</a>
  •
  <a href="#setup">Setup</a>
  •
  <a href="https://choosealicense.com/licenses/mit/">License</a>
</p>


#### Installation
• [Download Git](https://git-scm.com/downloads)  </br>
• [Download NodeJS](https://nodejs.org/en/)  </br>
• Install `forever` via `npm install forever -g`  </br>
• Open Terminal and type the following:  </br>
```bash
git clone https://github.com/photosensory/pornhub-discord-rpc.git
cd path-to-repo
npm install
npm install -D dotenv
npm start # This is starting the RPC
npm stop # This is stopping the RPC
```

#### Setup
• Go to the [Discord Developer Portal](https://discord.com/developers)  </br>
• Create an application. Note your "CLIENT ID" under the OAuth2 Tab.  </br>
• You will need to upload the PornHub logo called `ph_icon` under the rich presence assets *(Must be 512x512px Minimum)*.  </br>
• Rename `.env.example` to `.env` and input your **"CLIENT ID"** you took note of in place of ***"client_id_here"***.  </br>
• Edit `config.js` via adding or removing search terms in the following format:  </br>
```js
module.exports = {
    "searchTerms": [
        "Pussy",
        "Blowjob",
        "Sex",
        "Rimjob",
        "Milf"
    ]
}
```
• Now start the RPC via `npm start` and it should work.  </br>
If you wish to stop the RPC, type `npm stop`
