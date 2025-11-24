import dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger.js";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;

function startServer() {
  connectDB();
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
}

startServer();
