import express from "express";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

// //What is an Endpoint?
// //An endpoint is a ombination of a URL + HTTP method that lets the client interact with a specific resource.

app.listen(PORT, () => {
  console.log("Sever Started at PORT: 5000");
});
