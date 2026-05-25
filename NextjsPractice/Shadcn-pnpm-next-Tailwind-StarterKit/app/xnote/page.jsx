import NotesClient from "@/components/note-application/NotesClient";
import fs from "fs/promises";
import path from "path";

async function Notes() {
  const filePath = path.join(process.cwd(), "data", "notes.json");
  let notes = [];
  try {
    const data = await fs.readFile(filePath, "utf-8");
    notes = JSON.parse(data);
    if (!Array.isArray(notes)) notes = [];
  } catch (e) {
    notes = [];
  }

  return <NotesClient initialNotes={notes} />;
}

export default Notes;