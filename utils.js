const PornHub = require("pornhub.js");
const pornhub = new PornHub();

const config = require("./config.js");

module.exports = class Utils {
    constructor() { };

    pickRandomFrom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    async pickVideo() {
        const word = this.pickRandomFrom(config.searchTerms);
        let videoArray = undefined;

        await pornhub.search("Video", word).then((response) => {
            videoArray = this.pickRandomFrom(response.data);
        }).catch(() => {
            videoArray = undefined;
        });

        return videoArray
    }

    getVideoLength(duration) {
        // theres probably a better way of doing this.
        const minutes = parseInt(duration.substring(0, duration.indexOf(":"))) * 60000;
        const seconds = parseInt(duration.split(":")[1]) * 1000;
        return minutes + seconds;
    }
}