import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

app.use("/api/notes", notesRoutes);

//What is an Endpoint?
//An endpoint is a ombination of a URL + HTTP method that lets the client interact with a specific resource.

app.listen(5000, () => {
  console.log("Sever Started at PORT: 5000");
});
