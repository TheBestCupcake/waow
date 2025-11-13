const express = require('express');
const router = express.Router();

const {getAllVideos, getVideo} = require('../controllers/videoController');

router.get("/", getAllVideos);
router.get("/:name", getVideo);

module.exports = router;