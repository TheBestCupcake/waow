const {dbGetVideoByName, dbGetAllVideos} = require("../utils/getVideos");
//Logic for all of the api routes.

exports.getAllVideos = async (req, res) => {
    videoList = await dbGetAllVideos();
    console.log(videoList);
    return res.status(200).json(videoList);
}

exports.getVideo = async (req, res) => {
    const pathName = req.params.name;
    const name = decodeURIComponent(pathName.split('/').pop());

    videoJson = await dbGetVideoByName(name);
    return res.status(200).json(videoJson);
}
