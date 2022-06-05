const NotesApi = require('./notesApi');


require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads notes info', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(
      ['This note is coming from the server']
    ));

    api.loadNotes((repoInfo) => {
      expect(repoInfo).toEqual(['This note is coming from the server']);
    });
  });
});