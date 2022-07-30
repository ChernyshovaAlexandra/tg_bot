import React, { useEffect, useRef, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import $ from 'jquery'

function EyeContact({ nextLevel }) {
    let sectionsInitial = [{ contact: false }, { contact: false }, { contact: false }]
    const [sections, setContact] = useState(sectionsInitial)
    const [dragged, setDragged] = useState(false)
    const draggableRef = useRef()
    const [coordinates, setCoordinates] = useState([])

    const ondrag = () => {
        setDragged(true)
    }
    useEffect(() => {
        let arr = []

        if (dragged && window.innerWidth > 891) {
            setTimeout(() => {
                setContact([{ contact: true }, { contact: false }, { contact: false }])
            }, 1700)
            setTimeout(() => {
                setContact([{ contact: true }, { contact: true }, { contact: false }])
            }, 4200)
            setTimeout(() => {
                setContact([{ contact: true }, { contact: true }, { contact: true }])
                nextLevel()
            }, 5500)

        }
        if (dragged && window.innerWidth < 891) {
            setTimeout(() => {
                setContact([{ contact: true }, { contact: false }, { contact: false }])
                nextLevel()

            }, 1700)
        }
    }, [dragged])

    return (
        <div className="w-full h-full eye-contact flex">
            <div className="grid grid-cols-3 w-full h-full eye-contact">
                {sections && sections.length ?
                    sections.map((item, id) => (
                        <div key={id} className={`section grid grid-rows-3 ${item.contact ? "contacted" : ""}`}>
                            <div className={`${'section-row' + id + '_1'}`}></div>
                            <div className={`${'section-row' + id + '_2'}`}></div>
                            <div className={`${'section-row' + id + '_3'}`}></div>
                        </div>
                    )) : <></>
                }
                <Draggable ref={draggableRef} onDrag={ondrag}>
                    <div className="eye"></div>
                </Draggable>
            </div>
        </div>
    )
}


export default EyeContact;