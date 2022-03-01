import {useState} from "react";
import categoryService from "../../services/categoryService";

function CategoryForm({reloadData}) {
    const [title, setTitle] = useState('');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleAdd(event) {
        event.preventDefault();

        const newCategory = {
            id: new Date().getTime(),
            title: title
        };

        categoryService.add(newCategory);
        setTitle('');

        reloadData();
    }

    return (
        <form className="form todo__form">
            <div className="form__row">
                <div className="form__item">
                    <label htmlFor="input" className="form__label">Add new category</label>
                    <input type="text" id="input"
                           className="form__input"
                           placeholder="Create new category here..."
                           value={title}
                           onChange={handleChange}/>
                </div>
            </div>
            <div className="form__actions">
                <button onClick={handleAdd} type="submit" className="todo__btn btn btn--green">+</button>
            </div>
        </form>
    );
}

export default CategoryForm;