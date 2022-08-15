import React, { useEffect } from "react";
import Inner from "../components/Inner";
import StartMob from "../components/StartMob";



function Start({ addition, question, answers, setAddition, nextLevel }) {
    let w = false, h = false
    const setSizes = () => {
        h = window.innerHeight
        w = window.innerWidth
    }
    setSizes()
    window.addEventListener('resize', setSizes)
    return (

        <>
            {w && w < 891 ?
                <>
                    {w && <StartMob w={w} h={h} />}
                    <Inner addition={addition} question={question} answers={answers} setAddition={setAddition} nextLevel={nextLevel} w={w} />
                </>
                :
                <Inner addition={addition} question={question} answers={answers} setAddition={setAddition} nextLevel={nextLevel} w={w} />
            }
        </>
    )
}

export default Start;