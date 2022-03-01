import {useEffect, useState} from "react";
import categoryService from "../services/categoryService";
import {useNavigate, useParams} from "react-router-dom";
import noteService from "../services/noteService";
import NoteForm from "../components/notes/NoteForm";
import StandardLayout from "../layouts/StandardLayout";

function NoteEditPage() {
    const [note, setNote] = useState([]);
    const [category, setCategory] = useState(undefined);

    const {id} = useParams();
    const navigate = useNavigate();

    function loadData() {
        const parsedId = parseInt(id);

        if (isNaN(parsedId)) {
            navigate('/');
            return;
        }

        setNote(noteService.getById(parsedId));
        setCategory(categoryService.getById(note.categoryId));
    }

    useEffect(loadData, [id, note?.categoryId, navigate]);

    return (
        <StandardLayout pageTitle="Edit note">
            <NoteForm note={note} selectedCategory={category} refreshNotes={loadData}/>
        </StandardLayout>
    )
}

export default NoteEditPage;