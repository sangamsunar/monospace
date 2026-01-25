import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

// //What is an Endpoint?
// //An endpoint is a ombination of a URL + HTTP method that lets the client interact with a specific resource.

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Sever Started at PORT: ${PORT}`);
  });
});
