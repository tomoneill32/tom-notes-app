console.log("The notes app is running");
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

const model = new NotesModel();
const view = new NotesView(model);
