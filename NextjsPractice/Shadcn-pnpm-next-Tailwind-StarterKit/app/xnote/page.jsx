import AddNote from "@/components/note-application/addNote";
import NoteList from "@/components/note-application/noteList";

async function Notes() {
   const response = await fetch("http://localhost:3000/api/notes",{cache:'no-store'});

    const data = await response.json();
    console.log(data);
    return (
        <>
          <AddNote/>
          <NoteList notes={data}/>
        </>
      );
}

export default Notes;