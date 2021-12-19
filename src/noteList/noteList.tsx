import React, { useContext, useEffect, useRef, useState } from "react";
import Note from '../note';
import './noteList.css'
import Loader from "../loader/loader";
import globalContext from "../globalState";

const NoteList: React.FunctionComponent<any> = (props) => {
  const { state, dispatch } = useContext(globalContext)

  const coverRef = useRef(null)
  const [topResult, setTopResult] = useState([]);
  const [otherResult, setOtherResult] = useState([]);


  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      const data: any = sessionStorage.getItem("notes")
      dispatch({ type: "LOAD_NOTES", notes: JSON.parse(data) })
    } 
    // else {
    //   const data: any =  localStorage.getItem("sort")
    //   const sort = JSON.parse(data);
    //   fetch(`${process.env.REACT_APP_API_DOMAIN}get_notes.php?sortby=${sort["sortby"]}?orderby=${sort["orderby"]}`).then(res => {
    //     return res.json()
    //   }).then(data => {
    //     dispatch({ type: "LOAD_NOTES", notes: data })
    //   }
    //   )
    // }
    const beforeUnload = () => {
      sessionStorage.removeItem("notes")
      sessionStorage.removeItem("colorCodes")
      console.log("cleared");

    }
    window.addEventListener("beforeunload", beforeUnload)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      let top: any = []
      let other: any = []

      state.notes.forEach((note: any) => {
        if (note.title.toLowerCase().includes(props.query)) top.push(note)
        else if (note.description.toLowerCase().includes(props.query)) other.push(note)
      })

      setTopResult(top)
      setOtherResult(other)

      // fetch(process.env.REACT_APP_API_DOMAIN+ "search_notes.php?search=" + props.query).then(data => data.json()).then(res => {
      //   console.log(res.top);
      //   setTopResult(res.top)
      //   setOtherResult(res.other)
      // });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.query, props.search])


  console.count("NOTELIST RENDERED")
  return (
    <>
      <div className={"cover"} ref={coverRef}></div>
      <section className="notes">
        {props.search ?
          <>
            <div className="searchDivider">Top Results</div>
            <div className="grid">

              {topResult.length > 0 ?
                topResult.map((note: any) => {
                  return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
                })
                : "NO MATCHES FOUND"}
            </div>

            <div className="searchDivider">Others</div>
            <div className="grid">

              {otherResult.length > 0 ?
                otherResult.map((note: any) => {
                  return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
                })
                : "NO MATCHES FOUND"}
            </div>
          </>
          :
          <div className="grid">
            {state.notes.length > 0 ? state.notes.map((note: any) => {
              return <Note key={note.id} note={note} ref={coverRef} abc={abc} />
            }) : <Loader />
            }
          </div>
        }
      </section>
    </>
  )
}

export default NoteList