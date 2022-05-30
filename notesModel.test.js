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
})