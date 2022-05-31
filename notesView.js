class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEL = document.createElement('div');
      noteEL.innerText = note;
      noteEL.className = 'note';
      this.mainContainerEl.append(noteEL);
    })
  }
}

module.exports = NotesView;