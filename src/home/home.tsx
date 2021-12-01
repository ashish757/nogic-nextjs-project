import React, { useReducer, useEffect } from "react";
import TakeNote from '../takeNote/TakeNote';
import NoteList from '../noteList/noteList';
import './styles.css'

import globalContext from "../globalState";
import reducer from '../globalState/reducer';
import data from '../globalState/data';


const Home = () => {
  const [state, dispatch] = useReducer(reducer, data)

  useEffect(() => {
    if (localStorage.getItem('notes')) {
      const data: any = localStorage.getItem('notes')
      dispatch({ type: "LOAD_NOTES", notes: JSON.parse(data) })
    }
  }, [])

  return (
    <main className='center'>
        <TakeNote dispatch={dispatch} />
      <globalContext.Provider value={{ state, dispatch }}>
        <NoteList />
      </globalContext.Provider>
    </main>
  )
}

export default Home