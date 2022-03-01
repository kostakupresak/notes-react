let notes = [
    {
        id: 1,
        title: 'Notes from workshop',
        content: 'I should learn React!',
        categoryId: 1,
        date: new Date()
    },
    {
        id: 2,
        title: 'Deployment steps',
        content: 'npm install && npm run build',
        categoryId: 2,
        date: new Date()
    }
];

function getAll() {
    return notes;
}

function getAllByCategoryId(id) {
    return notes.filter(note => note.categoryId === id);
}

function getById(id) {
    return notes.find(note => note.id === id);
}

function add(note) {
    notes = [...notes, note];
}

function update(id, updatedFields) {
    const foundIndex = notes.findIndex(note => note.id === id);

    notes[foundIndex] = {
        ...notes[foundIndex],
        ...updatedFields
    };

    notes = [...notes];
}

function deleteById(id) {
    notes = notes.filter(item => item.id !== id);
}

const noteService = {
    getAll,
    getAllByCategoryId,
    getById,
    add,
    update,
    deleteById
};

export default noteService;