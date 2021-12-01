import React, { useRef, useState } from "react";
import './styles.css';
import colorCode from "../colorCodes";
import ColorPallete from "../colorPallete";

const TakeNote = React.memo(({ dispatch }: any) => {
	const takenote: any = useRef(null)
	const textareaRef: any = useRef(null)
	let noteColor: any = (localStorage.getItem('createNoteColor') ? localStorage.getItem('createNoteColor') : "default")
	const [note, setNote] = useState({ title: "", desc: "", color:  noteColor})
	const [isTakeNoteActive, setIsTakeNoteActive] = useState(false)


	const handler = (e: any) => {
		if (e.target.name === "title") setNote({ ...note, title: e.target.value })
		if (e.target.name === "desc") {
			setNote({ ...note, desc: e.target.value })
			e.target.style.height = 'auto'
			e.target.style.height = `${e.target.scrollHeight}px`
		}
		console.log(note);

	}

	const saveNote = () => {
		console.log(note);
		const id = new Date().getTime().toString()
		if (!note.title.trim() && !note.desc.trim()) {
			setIsTakeNoteActive(false)
		}
		else if (note.title.trim() && !note.desc.trim()) {
			console.log("have title but no desc");
			dispatch({ type: "ADD_NOTE", id, title: note.title, desc: note.title, color: note.color })
		}
		else if (!note.title.trim() && note.desc.trim()) {
			console.log("have title but no desc");
			dispatch({ type: "ADD_NOTE", id, title: note.desc.split(" ").slice(0, 4).join(" "), desc: note.desc, color: note.color })
		}
		else {
			dispatch({ type: "ADD_NOTE", id, title: note.title, desc: note.desc, color: note.color })
		}
		setIsTakeNoteActive(false)
		setNote((prev) => {return { title: "", desc: "", color: prev.color }})
	}


	const focusHandler = (event: any) => {
		if (!isTakeNoteActive) {
			event.target.placeholder = "Title"
			// textareaRef.current.focus()
		}
		setIsTakeNoteActive(true)

		const documentHandler = (e: any) => {
			if (e.path.includes(document.querySelector('.takenote.active'))) {
				setIsTakeNoteActive(true)

			} else {
				saveNote()
				setIsTakeNoteActive(false)
				event.target.placeholder = "Take Note.."
				document.removeEventListener('click', documentHandler)
			}
		}

		document.addEventListener('click', documentHandler)

	}
	const colorBtnCallback = (color: string) => {
		setNote({...note, color: color})
		localStorage.setItem('createNoteColor', color)
	}

	console.count("TAKENOTE RENDERED");
	return (
		<div className={"takenote" + (isTakeNoteActive ? " active" : "")} ref={takenote} style={{background: colorCode[note.color]}}>
			<div className="takenote-inputs">
				<div className="title">
					<input className="title-input" value={note.title} name="title" type="text" placeholder="Take Note.." onChange={handler} onClick={focusHandler} />
				</div>
				<div className="desc">
					<textarea ref={textareaRef} className="desc-input" value={note.desc} name="desc" placeholder="Take Note" onChange={handler} ></textarea>
				</div>
			</div>
			<div className="btns">
				<ColorPallete callback={colorBtnCallback} activeColor={note.color} />
				<button className="savebtn" onClick={saveNote}>Done</button>
			</div>
		</div>
	)
})

export default TakeNote