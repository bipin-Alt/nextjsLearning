import { error } from "console";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "data", "notes.json");
    const data = await fs.readFile(filePath, "utf-8");
    let notes;
    try {
      notes = JSON.parse(data);
      if (!Array.isArray(notes)) notes = [];
    } catch (e) {
      // If the file is empty or contains invalid JSON, start with empty array
      notes = [];
    }

    if (!body || typeof body !== "object") {
      throw new Error("Invalid request body");
    }

    const newNote = {
      id: Date.now(),
      title: body.title || "",
      description: body.description || "",
    };

    notes.push(newNote);

    await fs.writeFile(filePath, JSON.stringify(notes, null, 2));
    console.log("The Notes are :", notes);
    return NextResponse.json(newNote, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "notes.json");
    const data = await fs.readFile(filePath, "utf-8");
    let notes;
    try {
      notes = JSON.parse(data);
      if (!Array.isArray(notes)) notes = [];
    } catch (e) {
      notes = [];
    }

    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//update the notes in notes.json http method
export async function PATCH(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "notes.json");
    const data = await fs.readFile(filePath, "utf-8");
    let notes;
    try {
      notes = JSON.parse(data);
      if (!Array.isArray(notes)) notes = [];
    } catch (e) {
      notes = [];
    }

    const idToEdit = body?.id;
    if (!idToEdit) {
      throw new Error("Invalid request body: id is required");
    }

    let updatedNote = null;
    const updated = notes.map((note) => {
      if (note.id === idToEdit) {
        updatedNote = {
          ...note,
          title: body.title ?? note.title,
          description: body.description ?? note.description,
        };
        return updatedNote;
      }
      return note;
    });

    if (!updatedNote) {
      throw new Error("Note not found");
    }

    await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
    return NextResponse.json({ success: true, note: updatedNote }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//Delete the notes from notes.json file http method 
export async function DELETE(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "notes.json");
    const data = await fs.readFile(filePath, "utf-8");
    let notes;

    try {
      notes = JSON.parse(data);
      if (!Array.isArray(notes)) notes = [];
    } catch (e) {
      notes = [];
    }

    const idToDelete = body?.id;
    if (!idToDelete) {
      throw new Error("Invalid request body: id is required");
    }

    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    await fs.writeFile(filePath, JSON.stringify(filteredNotes, null, 2));

    return NextResponse.json(
      { success: true, notes: filteredNotes },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
