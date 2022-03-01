import NoteForm from "../components/notes/NoteForm";
import NoteList from "../components/notes/NoteList";
import {useEffect, useState} from "react";
import noteService from "../services/noteService";
import StandardLayout from "../layouts/StandardLayout";

function IndexPage() {
    const [notes, setNotes] = useState([]);

    function refreshNotes() {
        setNotes(noteService.getAll());
    }

    useEffect(refreshNotes, []);

    return (
        <StandardLayout pageTitle="Notebook">
            <NoteForm refreshNotes={refreshNotes}/>
            <NoteList notes={notes}/>
        </StandardLayout>
    );
}

export default IndexPage;