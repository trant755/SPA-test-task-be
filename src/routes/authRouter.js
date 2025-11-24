import express from "express";
import ctrlWrapper from "../middlewares/ctrlWrap.js";
import { register, login } from "../controllers/authController.js";
import validate from "../middlewares/validate.js";
import { userRegisterJoiSchema, userLoginJoiSchema } from "../models/User.js";

const router = express.Router();

router.post(
  "/register",
  validate(userRegisterJoiSchema),
  ctrlWrapper(register)
);
router.post("/login", validate(userLoginJoiSchema), ctrlWrapper(login));

export default router;
