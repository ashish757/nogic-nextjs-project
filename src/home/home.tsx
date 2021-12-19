import React from 'react';
import TakeNote from '../takeNote/TakeNote';
import NoteList from '../noteList/noteList';
import './styles.css'


const Home: React.FunctionComponent = () => {
  // const { dispatch } = useContext(globalContext)
  

  console.log("HOME RENDERED");
  

  return (
    <main className='center'>
      <TakeNote />
      <NoteList />
    </main>
  )
}

export default Home