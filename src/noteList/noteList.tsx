import React, { useContext, useRef } from "react";
import Note from '../note';
import globalContext from "../globalState";
import './noteList.css'

const NoteList = (props: { search?: boolean, query?: String }) => {

  const coverRef = useRef(null)
  const { state : {notes} } = useContext(globalContext)


  let titleNotes: Array<any> = [];
  let descNotes: Array<any> = [];

  const abc = () => {
    let undoDeletes = Array.from(document.querySelectorAll('.alert'))
    console.log(undoDeletes);
    let height: number = 0

    if (undoDeletes.length > 1) {
      undoDeletes.forEach((ele: any) => {
        console.log(height);
        ele.style.transform = `translateY(-${height}px)`
        height = height + ele.offsetHeight + 10
      })
    }
  }

  if (props.search) {
    notes.map((note: any) => {

      if (note.title.toLowerCase().includes(props.query)) {
        titleNotes.push(note)
      }
      else if (note.desc.toLowerCase().includes(props.query)) {
        descNotes.push(note)
      }
      return null
    })
  }
  console.count("NOTELIST RENDERED")
  return (
    <>
      <div className={"cover"} ref={coverRef}></div>
      <section className="notes">
        {props.search ?
          <>
            <div className="searchDivider">Top Results</div>
            <div className="grid">

              {titleNotes.length > 0 ? titleNotes.map((note: any) => {
                return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
              }) : "NO MATCHES FOUND"}
            </div>

            <div className="searchDivider">Others</div>
            <div className="grid">

              {descNotes.length > 0 ? descNotes.map((note: any) => {
                return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
              }) : "NO MATCHES FOUND"}
            </div>
          </>
          :
          <div className="grid">
            {notes.map((note: any) => {
              return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
            })}
          </div>
        }
      </section>
    </>
  )
}

export default NoteList