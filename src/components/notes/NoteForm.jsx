import CategoryDropdown from "../categories/CategoryDropdown";
import {useEffect, useState} from "react";
import noteService from "../../services/noteService";
import categoryService from "../../services/categoryService";
import {Link, useNavigate} from "react-router-dom";

function NoteForm({refreshNotes, note=undefined}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [detailsLink, setDetailsLink] = useState('');
    const [category, setCategory] = useState(undefined);

    const navigate = useNavigate();

    function loadData() {
        if (!note) return;

        setTitle(note?.title ?? '');
        setContent(note?.content ?? '');
        setCategory(categoryService.getById(note?.categoryId));
        setDetailsLink(`/note/${note?.id}`);
    }

    useEffect(loadData, [note]);

    function handleSave(event) {
        event.preventDefault();

        if (note) {
            const updatedFields = {
                title: title,
                content: content,
                categoryId: category.id
            }

            noteService.update(note.id, updatedFields);

            navigate('/');
            return;
        }

        const newNote = {
            id: new Date().getTime(),
            title: title,
            content: content,
            categoryId: category.id,
            date: new Date()
        };

        noteService.add(newNote);

        setTitle('');
        setContent('');
        setCategory(undefined);

        refreshNotes();
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    return (
        <div className="new-note">
            <form className="new-note__form form">
                <div className="form__row">
                    <div className="form__item">
                        {!note && <label htmlFor="noteTitle" className="form__label">Add new note</label>}
                        <input type="text"
                               id="noteTitle"
                               className="new-note__input form__input"
                               placeholder="Title"
                               value={title}
                               onChange={handleTitleChange}/>
                        <label>
                            <textarea className="new-note__textarea form__textarea"
                                      placeholder="Take a note..."
                                      value={content}
                                      onChange={handleContentChange}/>
                        </label>
                    </div>
                </div>
                <div className="new-note__actions form__actions">
                    <CategoryDropdown category={category} setCategory={setCategory}/>
                    {!note &&
                        <button onClick={handleSave} type="submit" className="new-note__submit btn btn--green">Add</button>}
                    {note &&
                        <button onClick={handleSave} type="submit" className="new-note__submit btn btn--green">Save</button>}
                    {note &&
                        <Link to={detailsLink} className="new-note__submit btn btn--orange">Cancel</Link>}
                </div>
            </form>
        </div>
    );
}

export default NoteForm;