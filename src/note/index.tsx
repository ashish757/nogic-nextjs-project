import React, { useEffect, useRef, useContext, useState } from "react";
import './styles.css'
import { Delete } from "../Icons";
import colorCode from "../colorCodes";
import globalContext from "../globalState";
import ColorPallete from "../colorPallete";
import Alert from "../alert";

const Note = React.forwardRef(({ note, abc }: any, ref: any) => {
    const { dispatch } = useContext(globalContext)
    const [isDeleted, setIsDeleted] = useState<{ is: Boolean, timeoutId: any }>({ is: false, timeoutId: null })
    const [isEditing, SetIsEditing] = useState(false)

    const titleNode: any = useRef(null)
    const descNode: any = useRef(null)

    let date = new Date(Number(note.dateMod ? note.dateMod : note.id))

    useEffect(() => {
        if (isDeleted.is) { abc() }

        if (isEditing) {
            const cover = ref.current
            const endEditing = (e: any) => {

                if (note.title !== titleNode.current.innerText || note.desc !== descNode.current.innerText) {
                    dispatch({ type: "UPDATE_NOTE", id: note.id, title: titleNode.current.innerText, desc: descNode.current.innerText, dateMod: new Date().getTime().toString() })
                }
                e.target.classList.remove("active")
                SetIsEditing(false)
            }

            cover.addEventListener('click', endEditing)
            return () => {
                cover.removeEventListener('click', endEditing)
            }
        }

    })


    const editNote = () => {
        ref.current.classList.add("active")
        SetIsEditing(true)
    }
    const deleteNoteTimeout = () => {
        dispatch({ type: "REMOVE_NOTE", id: note.id })
    }
    const deleteNote = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (isEditing) {
            ref.current.classList.remove("active")
            SetIsEditing(false)
        }
        let deleteSetTimeoutId: any = setTimeout(deleteNoteTimeout, 4000)
        setIsDeleted({ is: true, timeoutId: deleteSetTimeoutId })
    }
    const alertHandler1 = () => {
        clearTimeout(isDeleted.timeoutId)
        setIsDeleted({ is: false, timeoutId: null })
    }
    const alertHandler2 = () => {
        clearTimeout(isDeleted.timeoutId)
        deleteNoteTimeout()
    }

    const colorBtnCallback = (color: string) => {
        dispatch({ type: "UPDATE_NOTE_COLOR", id: note.id, color: color })
    }

    console.count('NOTE RENDERED');
    return (
        <>
            <div className={"wrapper" + (isEditing ? " editing" : '') + (isDeleted.is ? " deleted" : '')}>

                <div className={"note"} onClick={editNote} style={{ background: colorCode[note.color] }}>

                    <div ref={titleNode} contentEditable={isEditing} className="title" suppressContentEditableWarning={true}>{note.title}</div>
                    <div ref={descNode} contentEditable={isEditing} className="description" suppressContentEditableWarning={true}>{note.desc}</div>

                    <div className="info">
                        {<p> {note.dateMod ?  "last edited" : "created at"} {date.toLocaleTimeString('en-us', { minute: 'numeric', hour: 'numeric' })} {date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
 
                        }
                    </div>
                    <div className="btns">
                        <Delete clickHandler={deleteNote} />
                        <ColorPallete callback={colorBtnCallback} activeColor={note.color} />
                    </div>
                </div>
            </div>
            {isDeleted.is ? <Alert title={`Deleted ${note.title}`} handler1={alertHandler1} handler2={alertHandler2} btn1={"UNDO"} btn2={"OK"} /> : ''}

        </>
    )
})

export default Note