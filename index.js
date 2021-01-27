require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID

const RPC = require("discord-rpc");
const PornHub = require("pornhub.js");

const client = new RPC.Client({ transport: "ipc" });
const pornhub = new PornHub();

let videoLength = 1.8e+6;

// Login
client.login({ clientId: CLIENT_ID });