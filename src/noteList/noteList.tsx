import React, { useEffect, useRef, useState } from "react";
import Note from '../note';
import './noteList.css'

const NoteList: React.FunctionComponent<any> = (props) => {

  const coverRef = useRef(null)
  const [notes, setNotes] = useState(props.notes)
  const [topResult, setTopResult] = useState([]);
  const [otherResult, setOtherResult] = useState([]);

  useEffect(() => {
    setNotes(props.notes)
  }, [props.notes])


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

  useEffect(() => {
    if (props.search) {
      fetch("http://nogic-apis.42web.io/api/search_notes.php?search=" + props.query).then(data => data.json()).then(res => {
        console.log(res.top);
        setTopResult(res.top)
        setOtherResult(res.top)
      });
    }
  }, [props.query, props.search])



  // legacy code
  // state.notes.map(async (y) => {
  // if (note.title.toLowerCase().includes(props.query)) {
  //   titleNotes.push(note)
  // }
  // else if (note.desc.toLowerCase().includes(props.query)) {
  //   descNotes.push(note)
  // }
  // return null
  // })

  console.count("NOTELIST RENDERED")
  return (
    <>
      <div className={"cover"} ref={coverRef}></div>
      <section className="notes">
        {props.search ?
          <>
            <div className="searchDivider">Top Results</div>
            <div className="grid">

              {topResult.length > 0 ? topResult.map((note: any) => {
                return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
              }) : "NO MATCHES FOUND"}
            </div>

            <div className="searchDivider">Others</div>
            <div className="grid">

              {otherResult.length > 0 ? otherResult.map((note: any) => {
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