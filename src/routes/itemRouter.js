import express from "express";
import auth from "../middlewares/auth.js";
import ctrlWrapper from "../middlewares/ctrlWrap.js";
import { getItems } from "../controllers/itemController.js";

const router = express.Router();

router.get("/", auth, ctrlWrapper(getItems));

export default router;
