import mongoose, { isValidObjectId } from "mongoose";
import { Like } from "../models/like.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    // TODO: toggle like on video
})

const toogleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    // TODO: toogle like on comment
})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    // TODO: toogle like on tweet
})

const getLikedVideos = asyncHandler(async (req, res) => {
    // TODO: get all liked videos
})

export {
    toogleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}