'use client'

import { useEffect, useState } from "react";
import AddNote from "./addNote";
import NoteList from "./noteList";

export default function NotesClient({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes ?? []);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    setNotes(initialNotes ?? []);
  }, [initialNotes]);

  async function refreshNotes() {
    const response = await fetch("/api/notes", { cache: "no-store" });
    if (!response.ok) {
      console.error("Failed to load notes", await response.text());
      return;
    }

    const data = await response.json();
    setNotes(data);
  }

  async function handleSave(noteData) {
    const method = noteData?.id ? "PATCH" : "POST";
    const body = {
      ...(noteData?.id ? { id: noteData.id } : {}),
      title: noteData.title,
      description: noteData.description,
    };

    const response = await fetch("/api/notes", {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error("Failed to save note", await response.text());
      return;
    }

    setEditingNote(null);
    await refreshNotes();
  }

  function handleStartEdit(note) {
    setEditingNote(note);
  }

  function handleCancelEdit() {
    setEditingNote(null);
  }

  return (
    <>
      <AddNote
        editingNote={editingNote}
        onSave={handleSave}
        onCancel={handleCancelEdit}
      />
      <NoteList
        notes={notes}
        onEdit={handleStartEdit}
        onDeleteSuccess={refreshNotes}
      />
    </>
  );
}
