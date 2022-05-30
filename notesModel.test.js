const NotesModel = require('./notesModel');

describe('NotesModel', () => {
 
  beforeEach(() => {
    model = new NotesModel();
  });

  describe('getNotes', () => {
    it('returns an empty array at first', () => {
      expect(model.getNotes()).toEqual([]);
    })
  })
  
  describe('addNote', () => {
    it('adds a note to the model', () => {
      model.addNote('Buy milk');
      expect(model.getNotes()).toEqual(['Buy milk']);
    })
  })
})