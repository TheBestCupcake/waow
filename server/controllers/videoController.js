//Logic for all of the api routes.

exports.getAllVideos = async (req, res) => {
    return res.status(200).json({name: "gigi from database.", url: "src/database/gigi.mp4"});
}

exports.getVideo = async (req, res) => {
    return res.status(200).send(`${req.params.name}`)
}