//Logic for all of the api routes.

exports.getAllVideos = async (req, res) => {
    return res.status(200).send("hiya.");
}

exports.getVideo = async (req, res) => {
    return res.status(200).send(`${req.params.name}`)
}