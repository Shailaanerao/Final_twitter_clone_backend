import express from "express"
import {Login, Register,Logout,getMyprofile,Follow,Unfollow, Bookmark, GetOtherUsers} from '../controllers/userController.js'
import isAuthenticated from "../config/auth.js";

const router =express.Router()

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/profile/:id").get(isAuthenticated,getMyprofile);
router.route("/follow/:id").post(isAuthenticated,Follow);
router.route("/unfollow/:id").post(isAuthenticated,Unfollow);
router.route("/bookmark/:id").put(isAuthenticated,Bookmark);
router.route("/otherprofile/:id").get(isAuthenticated,GetOtherUsers);

export default router;