import {Link} from "react-router-dom";
import categoryService from "../../services/categoryService";

function Category({category, reloadData}) {
    const link = `/category/${category?.id}`;

    function handleDelete() {
        categoryService.deleteById(category?.id);
        reloadData();
    }

    return (
        <li className="todo__item">
            <Link to={link} className="todo__text todo__text--category">{category?.title}</Link>
            <button onClick={handleDelete} type="button" className="todo__remove">X</button>
        </li>
    );
}

export default Category;