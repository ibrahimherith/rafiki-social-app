import express from "express";
import { signin, signout } from "../controllers/authController.js";

const router = express.Router();

router.route("/auth/signin").post(signin);
router.route("/auth/signout").get(signout);

export default router;
