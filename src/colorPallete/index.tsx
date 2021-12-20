import React, { useEffect, useRef, useState } from "react";
import { Pallete } from "../Icons";
import './styles.css'


const ColorPallete: React.FunctionComponent<{ callback: any, activeColor: any }> = (props) => {
    const [activeColor, setActiveColor] = useState(props.activeColor)
    const [colorCodes, setColorCodes] = useState<any>({})
    const menu: any = useRef(null)

    useEffect(() => {
        let position = menu.current.getBoundingClientRect()

        if (position.left < 0) {
            // if menu goes in left side
            menu.current.style.left = "-1rem"
            menu.current.style.transform = 'none'
        }

        if (position.right + 20 > window.innerWidth) {
            // if menu goes in right side
            menu.current.style.left = "unset"
            menu.current.style.right = "-1rem"
            menu.current.style.transform = 'none'
        }
    })

    useEffect(() => {
        if (sessionStorage.getItem("colorCodes")) {
            let data: any = sessionStorage.getItem("colorCodes")
            setColorCodes(JSON.parse(data))
        } else {
            console.log("fetching color codes", sessionStorage.getItem("colorCodes"));
            
            fetch(process.env.REACT_APP_API_DOMAIN + "get_colors.php").then(data => data.json()).then(res => {
                setColorCodes(res)
                sessionStorage.setItem("colorCodes", JSON.stringify(res))
                console.log("SETTED");
                
            });
        }

    }, [])

    const setColorHandler = (color: string, colorCode: string) => {
        setActiveColor(color)
        props.callback(color, colorCode)
    }

    console.count("COLOR PALLETE RENDERED");

    return (<div className="colorbtn" onClick={(e) => e.stopPropagation()}>
        <Pallete />
        <div className={"menu"} onClick={(e) => e.stopPropagation()} ref={menu}>
            {Object.keys(colorCodes).length > 0 ?
                Object.keys(colorCodes).map((color: any) => {
                    return (<button key={color} onClick={() => setColorHandler(color, colorCodes[color])} className={activeColor === color ? "color active" : "color"} title={color} style={{ background: colorCodes[color] }}>
                        {activeColor === color ? <svg className={"colorSVG"} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg> : ''}
                    </button>)
                }) : "Loading..."
            }

        </div>
    </div>)
}

export default ColorPallete;