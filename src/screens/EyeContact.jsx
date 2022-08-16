import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import $ from 'jquery'

function EyeContact({ nextLevel }) {
    let sectionsInitial = [{ contact: false }, { contact: false }, { contact: false }]
    const [sections, setContact] = useState(sectionsInitial)
    const [dragged, setDragged] = useState(false)
    const draggableRef = useRef()
    const [grayPanel, setPanel] = useState(false)
    const [sizes, setSizes] = useState([])
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        setTimeout(() => {
            setPanel(true)
        }, 1300)
        if (!sizes.length) {
            $('.section').each(
                (id, item) => {
                    sizes.push(item.offsetTop)
                }
            )
            setSizes(sizes)
        }

    }, [])

    const setSectionMade = () => {
        if ($('.eye').offset().top < sizes[1]) {
            let arr = sections
            setTimeout(() => {
                arr[0].contact = true
                setContact(arr)
            }, 1500)
        }
        if ($('.eye').offset().top < sizes[2] && $('.eye').offset().top >= sizes[1]) {
            let arr = sections
            setTimeout(() => {
                arr[1].contact = true
                setContact(arr)
            }, 1500)
        }
        if ($('.eye').offset().top >= sizes[2]) {
            let arr = sections
            setTimeout(() => {
                arr[2].contact = true
                setContact(arr)
            }, 1500)
        }
        forceUpdate()
    }

    useEffect(() => {
        if (!sections.some(el => !el.contact)) {
            setTimeout(() => {
                nextLevel()
            }, 1000)
        }

    })

    return (
        <div className="w-full h-full eye-contact flex">
            <div className="grid grid-cols-3 w-full h-full eye-contact" style={{ height: window.innerWidth < 891 ? window.innerHeight : '' }} >
                <div className={`section section-1 ${sections[0].contact ? "contacted" : ''}`}></div>
                <div className={`section section-2 ${sections[1].contact ? "contacted" : ''}`}></div>
                <div className={`section section-3 ${sections[2].contact ? "contacted" : ''}`}></div>
                {grayPanel && sizes.length ?
                    <Draggable ref={draggableRef} onStop={setSectionMade} onDrag={setSectionMade}>
                        <div className="eye"></div>
                    </Draggable> : <></>}
            </div>
        </div >
    )
}


export default EyeContact;