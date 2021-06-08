# Pornhub Discord RPC

The most useless project ever.

This is a node project which randomly picks a video based on the categories it's provided and displays it on your discord status.

------

## Packages used

* [Pornhub.js](https://github.com/discordjs/RPC)
* [Discord-RPC](https://github.com/pionxzh/pornhub.js)

## Table of contents

* [Installation](#Install)
* [Setup](#Setup)
* [Usage](#Usage)

------

## Install

1. Download <strong>[Git](https://git-scm.com/downloads)</strong> and <strong>[NodeJS](https://nodejs.org/en/)</strong>. This will be required to make the rpc actually work.

2. **Install the forever package.**. After installing NodeJS and Git, you can install the forever package by opening up a terminal and running the following command `npm install -g forever`. Forever will be used to keep the rpc script running forever.

3. Install the core dependencies. You can do this by opening up a terminal and running the following commands.

    ```bash
    $ git clone https://github.com/photosensory/pornhub-discord-rpc.git
    $ cd path-to-repo
    $ npm install
    $ npm install -D dotenv
    ```

## Setup

1. Go to the [Discord Developer Portal](https://discord.com/developers) </br>

2. Create an application. Make a note your "CLIENT ID" under the OAuth2 Tab. </br>

3. You will need to upload the PornHub logo called `ph_icon` under the rich presence assets *(Must be 512x512px Minimum)*. I have provided an image for you to use, click [here](assets/ph_icon.png).</br>

4. Rename `.env.example` to `.env` and input your **"CLIENT ID"** you took note of in place of ***"client_id_here"***. </br>

5. Edit `config.js` via adding or removing search terms in the following format: </br>

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

6. Now start the rpc script via `npm run start` and it should work. </br>
    - You can stop the rpc script by running the following command: `npm run stop`

## Usage

Starting the script:

```bash
$ npm run start
```

Stopping the script:

```bash
$ npm run stop
```