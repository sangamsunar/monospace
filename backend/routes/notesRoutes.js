import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
try {
    res.status(200).send("You got 21 notes");
  
}catch (error) {
    console.error("Server Error ", error);
  }

router.post("/:id", (req, res) => {
try {
    res.status(210).json({ message: "Note Created Successfully" });
  
}catch (error) {
    console.error("Server Error ", error);
  }});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note Updates Successfully" });
});

router.delete("/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Server Error ", error);
  }
});
export default router;
