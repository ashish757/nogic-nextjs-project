import React from 'react';
import TakeNote from '../takeNote/TakeNote';
import NoteList from '../noteList/noteList';
import './styles.css'


const Home: React.FunctionComponent = () => {
  // const { dispatch } = useContext(globalContext)
  //  useEffect(() => {
    //  dispatch({type: "LOAD_NOTES"})
  //  eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, [])



  // useEffect(() => {

  //   if (sessionStorage.getItem("notes")) {
  //     let data: any = sessionStorage.getItem("notes")
  //     setNotes(JSON.parse(data))
  //   } else {
  //     fetch(process.env.REACT_APP_API_DOMAIN + "get_notes.php").then(data => data.json()).then(res => {
  //       setNotes(res)
  //       sessionStorage.setItem("notes", JSON.stringify(res))
  //     });
  //   }
    
  //   const beforeUnload = () => {
  //     sessionStorage.clear()
  //     console.log("cleared");
      
  //   }
  //   window.addEventListener("beforeunload", beforeUnload)

  // }, [])

  console.log("HOME RENDERED");
  

  return (
    <main className='center'>
      <TakeNote />
      <NoteList />
    </main>
  )
}

export default Home