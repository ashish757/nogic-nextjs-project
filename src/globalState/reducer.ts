const reducer = (state: any, action: any) => {
  switch (action.type) {

    case "ADD_NOTE":
      const addNewNotes = [{ id: action.id, title: action.title, desc: action.desc, dateMod: false, color: action.color }, ...state.notes]

      localStorage.setItem("notes", JSON.stringify(addNewNotes));
      return {
        ...state,
        notes: addNewNotes
      };
    case "LOAD_NOTES":
      // LOADING FORM LOCALSTORAGE INTO STATE
      return { ...state, notes: [...state.notes, ...action.notes] };

    case "REMOVE_NOTE":
      const newNotes = state.notes.filter((note: any) => {
        if (note.id === action.id) return false;
        return true;
      });

      localStorage.setItem('notes', JSON.stringify(newNotes))
      return {
        ...state,
        notes: newNotes
      };

    case 'SET_EDITING':

      return { ...state, isEditing: action.isEditing, editingId: action.editingId }

    case "UPDATE_NOTE_COLOR":
      const newUpdatedNotes_color = state.notes.map((note: any) => {
        if (note.id === action.id) {
          return { ...note, color: action.color }
        }
        return note
      })
      localStorage.setItem('notes', JSON.stringify(newUpdatedNotes_color))
      return { ...state, notes: newUpdatedNotes_color }

    case 'UPDATE_NOTE':
      const newUpdatedNotes = state.notes.map((note: any) => {
        if (note.id === action.id) {
          return { ...note, title: action.title, desc: action.desc, dateMod: action.dateMod }
        }
        return note
      })

      localStorage.setItem('notes', JSON.stringify(newUpdatedNotes))
      return { ...state, notes: newUpdatedNotes }

    default:
      return state;
  }


};

export default reducer;
