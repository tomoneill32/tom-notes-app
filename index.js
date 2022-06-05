console.log("The notes app is running");
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');


let notes = [
  'This note is coming from the server'
];

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
