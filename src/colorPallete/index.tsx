import React, { useEffect, useRef, useState } from "react";
import { Pallete } from "../Icons";
import colorCode from "../colorCodes";
import './styles.css'


const ColorPallete: React.FunctionComponent<{callback: any, activeColor: any}>  = (props) => {
    const [activeColor, setActiveColor] = useState(props.activeColor)
    const menu: any = useRef(null)

    useEffect(() => {
        let position = menu.current.getBoundingClientRect()

        if (position.left < 0) {
            // if menu goes in left sside
            menu.current.style.left =  "-1rem"
            menu.current.style.transform =  'none'
        }

        if (position.right > window.innerWidth) {
            // if menu goes in right side
            menu.current.style.left =  "unset"
            menu.current.style.right =  "-1rem"
            menu.current.style.transform =  'none'
        }

        
        
        
    })

    const setColorHandler = (color: string) => {
        setActiveColor(color)
        props.callback(color)
    }

    return (<div className="colorbtn" onClick={(e) => e.stopPropagation()}>
        <Pallete />
        <div className={"menu"} onClick={(e) => e.stopPropagation()} ref={menu}>
            {
                Object.keys(colorCode).map((color: any) => {
                    return (<button key={color} onClick={() => setColorHandler(color)} className="color" title={color} style={{ background: colorCode[color] }}>
                        {activeColor === color ? <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg> : ''}
                    </button>)
                })
            }

        </div>
    </div>)
}

export default ColorPallete;
