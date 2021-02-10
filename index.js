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
            largeImageKey: "ph_icon",
            instance: true,
            joinSecret: "025ed05c71f639de8bfaa0d679d7c94b2fdce12f",
            spectateSecret: "e7eb30d2ee025ed05c71ea495f770b76454ee4e0",
            matchSecret: "4b2fdce12f639de8bfa7e3591b71a0d679d7c93f",
            partyMax: 5,
            partySize: 1,
            partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        });
    } else {
        videoLength = 1.8e+6;
        client.setActivity({
            details: `Watching: Nothing`,
            startTimestamp: Date.now(),
            largeImageKey: "ph_icon",
            instance: true,
            joinSecret: "025ed05c71f639de8bfaa0d679d7c94b2fdce12f",
            spectateSecret: "e7eb30d2ee025ed05c71ea495f770b76454ee4e0",
            matchSecret: "4b2fdce12f639de8bfa7e3591b71a0d679d7c93f",
            partyMax: 5,
            partySize: 1,
            partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
        });
    }
}

// Ready Listener
client.on("ready", async () => {
    console.log("ready");

    await setActivity();
    setInterval(async () => {
        await setActivity();
    }, videoLength);
});

// Login
client.login({ clientId: "803250094505197593" });