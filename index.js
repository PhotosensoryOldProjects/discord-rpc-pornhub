require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID

const RPC = require("discord-rpc");
const Utils = require("./utils.js");

const client = new RPC.Client({ transport: "ipc" });
const utils = new Utils();

let videoLength = 1.8e+6;

async function setActivity() {
    const video = await utils.pickVideo();
    if (video !== undefined) {
        videoLength = utils.javascriptProsWouldLaughAtMeRightNow(video.duration);
        client.setActivity({
            details: `Watching: ${video.title}`,
            startTimestamp: Date.now(),
            largeImageKey: process.env.IMAGE_KEY,
            instance: false
        });
    } else {
        videoLength = 1.8e+6;
        client.setActivity({
            details: `Watching: Nothing`,
            startTimestamp: Date.now(),
            largeImageKey: process.env.IMAGE_KEY,
            instance: false
        });
    }
}

// Ready Listener
client.on("ready", async () => {
    await setActivity();
    setInterval(async () => {
        await setActivity();
    }, videoLength);
});

// Login
client.login({ clientId: CLIENT_ID });