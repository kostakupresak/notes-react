import Category from "./Category";

function CategoryList({categories, reloadData}) {
    function CategoryItems() {
        return categories.map(category =>
            <Category key={category.id} category={category} reloadData={reloadData}/>)
    }

    return (
        <ul className="todo__list">
            <CategoryItems/>
        </ul>
    );
}

export default CategoryList;