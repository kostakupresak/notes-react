import {useEffect, useState} from "react";
import categoryService from "../services/categoryService";
import {Link, useNavigate, useParams} from "react-router-dom";
import noteService from "../services/noteService";
import StandardLayout from "../layouts/StandardLayout";

function NoteDetailsPage() {
    const [note, setNote] = useState([]);


    const {id} = useParams();
    const navigate = useNavigate();

    const formattedDate = note && note.date
        ? `${note?.date?.getDate()}.${note?.date?.getMonth() + 1}.${note?.date?.getFullYear()}.`
        : undefined;

    function loadData() {
        const parsedId = parseInt(id);

        if (isNaN(parsedId)) {
            navigate('/');
            return;
        }

        setNote(noteService.getById(parsedId));
    }

    useEffect(loadData, [id, note?.categoryId, navigate]);

    function handleDelete() {
        noteService.deleteById(note?.id);
        navigate('/');
    }

    const categoryLink = `/category/${note?.categoryId}`;
    const editLink = `/edit/${note?.id}`;

    return (
        <StandardLayout pageTitle={note?.title}>
            <div className="note">
                <div className="note__content">
                    <div className="note__details">
                        <span className="note__date">{formattedDate}</span>
                        <Link to={categoryLink} className="note__category">
                            {categoryService.getById(note?.categoryId)?.title}
                        </Link>
                    </div>
                    <p className="note__text">{note?.content}</p>
                    <div className="note__actions">
                        <Link to={editLink} className="btn btn--green">Edit</Link>
                        <button onClick={handleDelete} type="button" className="btn btn--orange">Delete</button>
                    </div>
                </div>
            </div>
        </StandardLayout>
    )
}

export default NoteDetailsPage;