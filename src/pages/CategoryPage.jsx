import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import NoteList from "../components/notes/NoteList";

import categoryService from "../services/categoryService";
import noteService from "../services/noteService";
import StandardLayout from "../layouts/StandardLayout";

function CategoryPage() {
    const [notes, setNotes] = useState([]);
    const [category, setCategory] = useState(undefined);

    const {id} = useParams();
    const navigate = useNavigate();

    const categoryTitle = `Category: ${category?.title}`;

    function loadData() {
        const parsedId = parseInt(id);

        if (isNaN(parsedId)) {
            navigate('/');
            return;
        }

        setCategory(categoryService.getById(parsedId));
        setNotes(noteService.getAllByCategoryId(parsedId));
    }

    useEffect(loadData, [id, navigate]);

    return (
        <StandardLayout pageTitle={categoryTitle}>
            <div className="notebook">
                <NoteList notes={notes}/>
            </div>
        </StandardLayout>
    )
}

export default CategoryPage;