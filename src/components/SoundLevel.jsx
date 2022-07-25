import React, { useState } from "react";


function SoundLevel({ setAddition }) {
    const [level, setLevel] = useState(50)
    const checkLevel = (e) => {
        setLevel(e.target.value)
        if (e.target.value < 50) {
            setTimeout(() => { setAddition(0) }, 300)
        }
        else {
            setTimeout(() => { setAddition(1) }, 300)
        }
    }

    return (
        <div className="sound-level ">
            <input type='range' id="sound" name="sound" value={level} onChange={e => setLevel(e.target.value)} onMouseUp={e => checkLevel(e)} />
            <label htmlFor="sound"></label>
        </div>
    )
}

export default SoundLevel;