import express from "express";
import "dotenv/config";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"

const app = express();
const port = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
