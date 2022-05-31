console.log("The notes app is running");
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

const model = new NotesModel();
const view = new NotesView(model);

model.addNote('First note');
model.addNote('Second note');
view.displayNotes();

console.log(model.getNotes());
console.log(view);