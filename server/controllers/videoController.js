const {getVideo} = require("../utils/getVideos");
//Logic for all of the api routes.

exports.getAllVideos = async (req, res) => {
    console.log("BEFORE GET VIDEO");
    getVideo();
    console.log("AFTER GET VIDEO");
    return res.status(200).json({name: "When Gigi is your Neighbor (A Minecraft Story)", url: "https://www.youtube.com/embed/ZvzPCaXaejI"});
}

exports.getVideo = async (req, res) => {
    return res.status(200).send(`${req.params.name}`)
}