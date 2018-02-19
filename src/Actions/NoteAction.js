export const noteUpdate = updatedNote => ({
  type: 'NOTE_UPDATE',
  payload: updatedNote,
});

export const noteAdd = newNote => ({
  type: 'NOTE_ADD',
  payload: newNote,
});

