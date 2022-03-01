let categories = [
    {
        id: 1,
        title: 'Private'
    },
    {
        id: 2,
        title: 'Work'
    }
];

function getAll() {
    return categories;
}

function getById(id) {
    return categories.find(category => category.id === id);
}

function add(category) {
    categories = [...categories, category];
}

function deleteById(id) {
    categories = categories.filter(category => category.id !== id);
}

const categoryService = {
    getAll,
    getById,
    add,
    deleteById
};

export default categoryService;