import {useEffect, useState} from "react";
import categoryService from "../../services/categoryService";


function CategoryDropdown({category, setCategory}) {
    const [categories, setCategories] = useState([]);
    const [isToggled, setToggled] = useState(false);

    function loadCategories() {
        setCategories(categoryService.getAll);
    }

    useEffect(loadCategories, []);

    function handleToggle() {
        setToggled(!isToggled);
    }

    function handleSelect(id) {
        setCategory(categoryService.getById(id));
        setToggled(false);
    }

    function CategoryItems() {
        return categories.map(category =>
            <li key={category.id}
                className="form__dropdown-item js-dropdown-item"
                onClick={() => handleSelect(category.id)}>
                {category.title}
            </li>);
    }

    const activeClass = isToggled
        ? ' form__dropdown--active'
        : '';

    const selectedCategoryTitle = category?.title ?? 'Select category...';

    return (
        <div className={`form__dropdown js-dropdown${activeClass}`}>
            <button type="button"
                    className="form__dropdown-btn form__dropdown-btn--placeholder js-dropdown-btn"
                    onClick={handleToggle}>
                {selectedCategoryTitle}
            </button>
            <ul className="form__dropdown-list">
                <CategoryItems/>
            </ul>
        </div>
    );
}

export default CategoryDropdown;