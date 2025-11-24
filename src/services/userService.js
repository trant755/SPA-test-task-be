import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new Error("User with this email already exists");
    error.status = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const findUserByEmail = async (email, withPassword = false) => {
  const user = await User.findOne({ email }).select(
    withPassword ? "+password" : ""
  );
  return user;
};

export const validatePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};
