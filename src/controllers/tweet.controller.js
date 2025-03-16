import mongoose, { isValidObjectId } from "mongoose";
import { Tweet } from "../models/tweet.models.js"
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createTweet = asyncHandler(async (req, res) => {
    // TODO: create tweet
})

const getUserTweet = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

const updateTweet = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

const deleteTweet = asyncHandler(async (req, res) => {
    // TODO: delete tweet
})

export {
    createTweet,
    getUserTweet,
    updateTweet,
    deleteTweet
}