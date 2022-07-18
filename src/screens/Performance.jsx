import React, { useEffect, useState } from "react";
import { screens } from "./screens";
import Standart from "./Standart";
import Tags from "./Tags";



function Performance() {
    const [level, setLevel] = useState(0)
    const [addition, setAddition] = useState(undefined)
    const [tag, setTag] = useState()

    const nextLevel = () => {
        if (screens.length - 1 > level) {
            setLevel(level + 1);
            setAddition(undefined)
        }
        else {
            setLevel(0);
            setAddition(undefined)
        }
    }

    const selectTopic = (topic) => {
        setTag(topic);
        setAddition(0)
        // nextLevel()
    }
    return (
        <div className="question_block max-w-lg	mx-auto bg-white p-8 rounded-lg	shadow-md">
            <div>
                {screens[level].type === 'standart' ?
                    <Standart
                        addition={addition}
                        question={screens[level].question}
                        answers={screens[level].answers}
                        setAddition={setAddition}
                        nextLevel={nextLevel}
                    />
                    :
                    screens[level].type === 'tags' ?

                        <Tags
                            setTag={selectTopic}
                            tags={screens[level].answers[0].tags}
                            answers={screens[level].answers}
                            addition={addition}
                            nextLevel={nextLevel}
                        />

                        :
                        screens[level].type === 'exception' ?
                            <></> :
                            <></>
                }
            </div>
        </div>
    )
}

export default Performance;