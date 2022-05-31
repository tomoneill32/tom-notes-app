/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const View = require('./notesView');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  it('displays 2 notes', () => {
    const model = new NotesModel()
    const view = new View(model);
    model.addNote('First note');
    model.addNote('Second note');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});