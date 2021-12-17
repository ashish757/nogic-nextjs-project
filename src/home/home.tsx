import React, { useEffect, useState } from 'react';
import TakeNote from '../takeNote/TakeNote';
import NoteList from '../noteList/noteList';
import './styles.css'


const Home: React.FunctionComponent = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetch("https://" + process.env.REACT_APP_API_DOMAIN + "/api/get_notes.php").then(data => data.json()).then(res => {
      setNotes(res);
    });
  }, [])

  return (
    <main className='center'>
      <TakeNote setNotes={setNotes} />
      <NoteList notes={notes} />
    </main>
  )
}

export default Home