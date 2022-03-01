import StandardLayout from "../layouts/StandardLayout";
import {useEffect, useState} from "react";
import categoryService from "../services/categoryService";
import CategoryList from "../components/categories/CategoryList";
import CategoryForm from "../components/categories/CategoryForm";

function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    function loadData() {
        setCategories(categoryService.getAll());
    }

    useEffect(loadData, []);

    return (
        <StandardLayout pageTitle="Categories">
            <div className="todo">
                <div className="todo__wrap">
                    <CategoryForm reloadData={loadData}/>
                    <CategoryList categories={categories} reloadData={loadData}/>
                </div>
            </div>
        </StandardLayout>
    );
}

export default CategoriesPage;