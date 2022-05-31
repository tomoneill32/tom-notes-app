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
    expect(document.querySelector('div.note').innerText).toBe('First note');
  });
  
  it('can add a note by filling in a form then clicking a button', () => {
    const model = new NotesModel()
    const view = new View(model);
    const inputEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#add-note-button')
    inputEl.value = 'Hoover';
    buttonEl.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelector('div.note').innerText).toBe('Hoover');
  })
});