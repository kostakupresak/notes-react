import categoryService from "../../services/categoryService";
import {Link} from "react-router-dom";

function Note({note}) {
    const formattedDate = `${note?.date?.getDate()}.${note?.date?.getMonth() + 1}.${note?.date?.getFullYear()}.`;
    const noteLink = `/note/${note?.id}`;
    const categoryLink = `/category/${note?.categoryId}`;

    return (
        <div className="notebook__item">
            <h2 className="notebook__title">
                <Link to={noteLink} className="notebook__link">{note?.title}</Link>
            </h2>
            <span className="notebook__date">{formattedDate}</span>
            <Link to={categoryLink} className="notebook__category">
                {categoryService.getById(note?.categoryId)?.title}
            </Link>
        </div>
    );
}

export default Note;