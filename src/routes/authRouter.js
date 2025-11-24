import express from "express";
import ctrlWrapper from "../middlewares/ctrlWrap.js";
import { register, login, getMe } from "../controllers/authController.js";
import validate from "../middlewares/validate.js";
import { userRegisterJoiSchema, userLoginJoiSchema } from "../models/User.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/register",
  validate(userRegisterJoiSchema),
  ctrlWrapper(register)
);
router.post("/login", validate(userLoginJoiSchema), ctrlWrapper(login));
router.get("/me", auth, ctrlWrapper(getMe));

export default router;
