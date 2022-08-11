import React, { useEffect, useRef, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import $ from 'jquery'

function EyeContact({ nextLevel }) {
    let sectionsInitial = [{ contact: false }, { contact: false }, { contact: false }]
    const [sections, setContact] = useState(sectionsInitial)
    const [dragged, setDragged] = useState(false)
    const draggableRef = useRef()
    const [grayPanel, setPanel] = useState(false)

    const ondrag = () => {
        setDragged(true)
    }
    useEffect(() => {
        setTimeout(() => {
            setPanel(true)
        }, 1300)

        if (dragged ) {
            setTimeout(() => {
                setContact([{ contact: true }, { contact: false }, { contact: false }])
            }, 1700)
            setTimeout(() => {
                setContact([{ contact: true }, { contact: true }, { contact: false }])
            }, 4200)
            setTimeout(() => {
                setContact([{ contact: true }, { contact: true }, { contact: true }])
                nextLevel()
            }, 6500)

        }
        // if (dragged && window.innerWidth < 891) {
        //     setTimeout(() => {
        //         setContact([{ contact: true }, { contact: false }, { contact: false }])
        //         setTimeout(() => {
        //             nextLevel()
        //         }, 1600)

        //     }, 2500)
        // }
    }, [dragged])

    return (
        <div className="w-full h-full eye-contact flex">
            <div className="grid grid-cols-3 w-full h-full eye-contact">
                {sections && grayPanel && sections.length ?
                    sections.map((item, id) => (
                        <div key={id} className={`section grid grid-rows-3 ${item.contact ? "contacted" : ""}`}>
                            <div className={`${'section-row' + id + '_1'}`}></div>
                            <div className={`${'section-row' + id + '_2'}`}></div>
                            <div className={`${'section-row' + id + '_3'}`}></div>
                        </div>
                    )) : <></>
                }
                {grayPanel && <Draggable ref={draggableRef} onDrag={ondrag}>
                    <div className="eye"></div>
                </Draggable>}
            </div>
        </div>
    )
}


export default EyeContact;