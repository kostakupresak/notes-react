import IndexPage from "./pages/IndexPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import NoteEditPage from "./pages/NoteEditPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>} exact/>
                <Route path="/note/:id" element={<NoteDetailsPage/>} exact/>
                <Route path="/edit/:id" element={<NoteEditPage/>} exact/>
                <Route path="/categories" element={<CategoriesPage/>} exact/>
                <Route path="/category/:id" element={<CategoryPage/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;