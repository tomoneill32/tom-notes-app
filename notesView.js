class NotesView {
  constructor(model, api) {
    this.api = api
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#message-input');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      this.addToNotes()
    })

  }

  displayNotes() {
    this.clearNotesFromPage();
    
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEL = document.createElement('div');
      noteEL.innerText = note;
      noteEL.className = 'note';
      this.mainContainerEl.append(noteEL);
    })
    console.log(notes);
  }

  addToNotes() {
    const noteInput = this.inputEl.value;
    const notes = await this.api.createNote(noteInput);
    console.log(`saved notes ${notes}`);
    notes.forEach((note) => {
      const noteEL = document.createElement('div');
      noteEL.innerText = note;
      noteEL.className = 'note';
      this.mainContainerEl.append(noteEL);
      console.log(`adding ${note}`);
    })
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