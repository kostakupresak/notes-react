import Note from "./Note";

function NoteList({notes}) {
    function NoteItems() {
        return notes.map(note => <Note key={note.id} note={note}/>);
    }

    return (
        <div className="notebook">
            <NoteItems/>
        </div>
    );
}

export default NoteList;