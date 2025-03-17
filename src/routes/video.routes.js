import { Router } from "express";
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publshAVideo,
    toggePublishStatus,
    updateVideo
} from "../controllers/video.controller.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js"

const router = Router()
router.use(verifyJWT)

router.route("/")
    .get(getAllVideos)
    .post(upload.fields([
        { name: "videoFile", maxCount: 1, },
        { name: "thumbnail", maxCount: 1, },
    ]),
    publshAVideo
)

router.route("/:videoId")
    .get(getVideoById)
    .delete(deleteVideo)
    .patch(upload.single("thumbnail", updateVideo))

router.route("/toggle/publish/:videoId").patch(toggePublishStatus)

export default router