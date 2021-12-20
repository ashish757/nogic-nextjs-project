const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOAD_NOTES":

      sessionStorage.setItem("notes", JSON.stringify(action.notes))
      return { ...state, notes: action.notes }


    case "ADD_NOTE":
      const local: any = localStorage.getItem("sort");
      const sort = JSON.parse(local);
      let addNewNotes: any;
      if (sort.sortby === "dateCreated") {
        // DESC will show the newest note
        addNewNotes =  sort.orderby === "DESC" ? [action.note, ...state.notes] : [...state.notes, action.note]
      } else if (sort.sortby === "dateModified") {
        // DESC will show the latest edited note
        addNewNotes =  sort.orderby === "DESC" ? [ ...state.notes, action.note] : [action.note, ...state.notes]
      }

      sessionStorage.setItem("notes", JSON.stringify(addNewNotes))

      return {
        ...state,
        notes: addNewNotes
      };

    case "DELETE_NOTE":
      const newNotes = state.notes.filter((note: any) => {
        if (note.id === action.id) return false;
        return true;
      });



      sessionStorage.setItem("notes", JSON.stringify(newNotes))
      return {
        ...state,
        notes: newNotes
      };
    case 'UPDATE_NOTE':
      const newUpdatedNotes = state.notes.map((note: any) => {
        if (note.id === action.id) {
          return { ...note, title: action.title, description: action.description }
        }
        return note
      })

      sessionStorage.setItem('notes', JSON.stringify(newUpdatedNotes))
      return { ...state, notes: newUpdatedNotes }

    case 'CREATE_UPDATE_NOTE':
      const createNewUpdatedNotes = state.notes.map((note: any) => {
        if (note.id === action.id) {
          return action.note
        }
        return note
      })

      sessionStorage.setItem('notes', JSON.stringify(createNewUpdatedNotes))
      return { ...state, notes: createNewUpdatedNotes }

    case "DELETE_NOTES":
      return { ...state, notes: [] }
      
    case 'SET_EDITING':
      return { ...state, isEditing: action.isEditing, editingId: action.editingId }

    case "UPDATE_NOTE_COLOR":
      const newUpdatedNotes_color = state.notes.map((note: any) => {
        if (note.id === action.id) {
          return { ...note, color: action.color, colorCode: action.colorCode }
        }
        return note
      })
      sessionStorage.setItem('notes', JSON.stringify(newUpdatedNotes_color))
      return { ...state, notes: newUpdatedNotes_color }


    default:
      return state;
  }


};

export default reducer;
