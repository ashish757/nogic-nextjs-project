import React, { useRef, useState } from "react";
import './styles.css';
import ColorPallete from "../colorPallete";

const TakeNote = React.memo(({ setNotes }: any) => {
	const takenote: any = useRef(null)
	const textareaRef: any = useRef(null)
	let locl: any = localStorage.getItem('createNoteColor');
	
	let color: any = locl ? JSON.parse(locl)["color"] : "default"
	let colorCode: any = locl ? JSON.parse(locl)["colorCode"] : "#faeaea"

	const [note, setNote] = useState({ title: "", desc: "", color, colorCode })
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
		if (!note.title.trim() && !note.desc.trim()) {
			setIsTakeNoteActive(false)
		}
		else {
			fetch("https://" + process.env.REACT_APP_API_DOMAIN_PROD+ "/api/create_note.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					title: note.title ? note.title : note.desc.split(" ").slice(0, 4).join(" "),
					description: note.desc ? note.desc : note.title,
					color: note.color,
				})
			}).then(data => data.json()).then(res => {
				console.log(res)
				setNotes((prev: any) => {
					return [...prev, {
						id: res.data.id,
						color: res.data.color,
						title: res.data.title,
						description: res.data.description,
						dateCreated: res.data.dateCreated,
						dateModified: res.data.dateModified
					}]
				})
			})
		}
		setIsTakeNoteActive(false)
		setNote((prev) => { return { title: "", desc: "", color: prev.color, colorCode: prev.colorCode } })
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
	const colorBtnCallback = (color: string, colorCode: string) => {
		setNote({ ...note, color, colorCode })
		localStorage.setItem('createNoteColor', JSON.stringify({color, colorCode}))
	}

	console.count("TAKENOTE RENDERED");
	return (
		<div className={"takenote" + (isTakeNoteActive ? " active" : "")} ref={takenote} style={{ background: note.colorCode }}>
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