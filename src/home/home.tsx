import React, { useContext } from 'react';
import TakeNote from '../takeNote/TakeNote';
import NoteList from '../noteList/noteList';
import './styles.css'
import globalContext from '../globalState';


const Home: React.FunctionComponent  = () => {
  const {dispatch} = useContext(globalContext)
  return (
    <main className='center'>
        <TakeNote dispatch={dispatch} />
        <NoteList />
    </main>
  )
}

export default Home