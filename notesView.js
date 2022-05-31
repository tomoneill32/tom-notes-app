class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#message-input');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayNotes();
    })

  }

  displayNotes() {
    this.addToNotes();
    this.clearNotesFromPage();
    
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEL = document.createElement('div');
      noteEL.innerText = note;
      noteEL.className = 'note';
      this.mainContainerEl.append(noteEL);
    })
  }

  addToNotes() {
    const noteInput = this.inputEl.value;
    this.model.addNote(noteInput);
    this.inputEl.value = '';
  }

  clearNotesFromPage() {
    const notes = document.querySelectorAll("div.note");
    notes.forEach((note) => {
      note.remove();
    })

  }
}

module.exports = NotesView;