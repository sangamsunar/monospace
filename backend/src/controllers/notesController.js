import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
    // res.status(201).json({ message: "Note Created Successfully" });
  } catch (error) {
    console.error("Error in createNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content });
    res.status(200).json({ message: "Note Updated Successfully" });
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndDelete(req.params.id, { title, content });
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
