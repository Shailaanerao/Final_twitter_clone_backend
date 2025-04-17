import express from "express";
import {createTweet,deleteTweet,likeORdislike,getAllTweets,getFollowingTweets} from "../controllers/tweetController.js"
import isAuthenticated from "../config/auth.js";

const router =express.Router()



router.route("/create").post(isAuthenticated,createTweet)
router.route("/delete/:id").delete(isAuthenticated,deleteTweet)
router.route("/like/:id").put(isAuthenticated,likeORdislike)
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);

export default router;