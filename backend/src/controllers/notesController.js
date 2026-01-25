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

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    const savedNote = await newNote.save();
    res.status(201).json({ savedNote });
  } catch (error) {
    console.error("Error in createNote", error);
    res.status(500).json({ newNote });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!deleteNote) return res.status(404).json({ messgae: "Note not found" });
    await Note.findByIdAndUpdate(req.params.id, { title, content });
    res.status(200).json({ message: "Note Updated Successfully" });
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
