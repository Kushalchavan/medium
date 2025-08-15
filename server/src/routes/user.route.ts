import express from "express";
import {
  checkAuth,
  logout,
  signin,
  signup,
} from "../controller/user.controller";
import { verify } from "../middleware/verify.middleware";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").post(logout);
router.route("/me").get(verify, checkAuth);

export default router;
