'use client'
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function AddNote({ editingNote, onSave, onCancel }) {
  const [currentNote, setCurrentNote] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingNote) {
      setCurrentNote({
        title: editingNote.title ?? "",
        description: editingNote.description ?? "",
      });
    } else {
      setCurrentNote({ title: "", description: "" });
    }
  }, [editingNote]);

  async function handleOnSave() {
    await onSave({
      id: editingNote?.id,
      title: currentNote.title,
      description: currentNote.description,
    });
  }

  return (
    <div className="rounded-3xl border border-border bg-slate-50/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20">
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary-foreground dark:text-primary-foreground/90">
          Notes app
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Add a new note
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Create a note with a title and a  description. Your notes will appear below in a clean, responsive grid.
        </p>
      </div>

      <form className="grid gap-4">
        <Input
          type="text"
          value={currentNote.title}
          placeholder="Title"
          className="bg-white dark:bg-slate-950"
          onChange={(event) => setCurrentNote({ ...currentNote, title: event.target.value })}
        />
        <Textarea
          value={currentNote.description}
          placeholder="Write your note here..."
          className="bg-white dark:bg-slate-950"
          onChange={(event) => setCurrentNote({ ...currentNote, description: event.target.value })}
        />
        <div className="flex items-center justify-between gap-4">
          {editingNote ? (
            <Button onClick={onCancel} variant="secondary" type="button">
              Cancel
            </Button>
          ) : null}
          <Button onClick={handleOnSave} className="rounded-xl px-6 py-2" type="button">
            {editingNote ? "Update Note" : "Add Note"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;