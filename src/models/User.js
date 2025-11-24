import mongoose from "mongoose";
import Joi from "joi";

const userLoginJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const userRegisterJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { userLoginJoiSchema, userRegisterJoiSchema };
export default User;
