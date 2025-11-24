import {
  createUser,
  findUserByEmail,
  validatePassword,
} from "../services/userService.js";
import { generateToken } from "../services/tokenService.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await createUser({ name, email, password });
  const token = generateToken({ id: user.id, email: user.email });

  res.status(201).json({
    user,
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email, true);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await validatePassword(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  delete user.password;

  const token = generateToken({ id: user._id, email: user.email });

  res.status(200).json({
    user,
    token,
  });
};

export { register, login };
