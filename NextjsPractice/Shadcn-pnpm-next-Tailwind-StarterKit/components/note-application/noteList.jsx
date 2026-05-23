'use client'
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function NoteList({ notes }) {
  const router = useRouter();

  console.log(notes);
  async function deleteNote(id) {
    const request = await fetch("/api/notes", {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    if (!request.ok) {
      console.log("Failed to delete note", await request.text());
      return;
    }

    router.refresh();
  }
  
  async function updateNote(id) {
    const request = await fetch("/api/notes",{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({ id })
    }) ;
    if(!request.ok){
      console.log("Failed to delete note", await request.text());
      return;
    }
    router.refresh();
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {notes.length > 0 ? (
        notes.map((note) => (
          <article
            key={note.id}
            className={cn(
              "rounded-3xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-950",
              "overflow-hidden"
            )}
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground dark:bg-primary/15 dark:text-primary">
                {note.category}
              </span>
              <span className="text-xs text-muted-foreground">{note.date}</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">{note.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{note.content}</p>
            <Button onClick={()=>{deleteNote(note.id)}}>Delete Note</Button>
            <Button onClick={()=>{updateNote(note.id)}}>Edit Note</Button>
          </article>
        ))
      ) : (
        <div className="col-span-full rounded-3xl border border-dashed border-border/70 bg-muted p-8 text-center text-sm text-muted-foreground">
          No notes yet. Add a note above to get started.
        </div>
      )}
    </div>
  );
}
