import express from "express";
import {
  createNewPost,
  deletePost,
  getPost,
  getTimelinePost,
  getUserPosts,
  likePost,
  reportPost,
  updatePost,
} from "../Controllers/PostController.js";
import authenticate from "../middleware/Auth.js";
const router = express.Router();

router.use(authenticate);

router.get("/user/:id",authenticate, getUserPosts);
router.get("/:id",authenticate, getPost);
router.get("/:id/timeline", authenticate,getTimelinePost);
router.post("/:id/report",authenticate, reportPost);
router.post("/", authenticate,createNewPost);
router.put("/:id", authenticate,updatePost);
router.put("/:id/like",authenticate, likePost);
router.delete("/:id",authenticate, deletePost);

export default router;
