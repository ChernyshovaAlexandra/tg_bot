import React, { useEffect, useState } from "react";
import Karaoke from "./Karaoke";
import { screens } from "./screens";
import Standart from "./Standart";
import Start from "./Start";
import Tags from "./Tags";



function Performance() {
    const [level, setLevel] = useState(0)
    const [addition, setAddition] = useState(undefined)
    const [tag, setTag] = useState()
    const [audience, showAudience] = useState(true)

    const nextLevel = () => {
        if (screens.length - 1 > level) {
            setLevel(level + 1);
            setAddition(undefined)
        }
        else {
            setLevel(0);
            setAddition(undefined)
        }
        showAudience(false);
        setTimeout(() => {
            showAudience(true)
        }, 10)
    }

    const selectTopic = (topic) => {
        setTag(topic);
        showAudience(false);
        setTimeout(() => {
            showAudience(true)
        }, 10);
        setAddition(0)
    }
    return (
        <div className="main-content">
            {audience &&
                <div className="audience-container" >
                    <div className="audience-inner" style={{
                        background: `url(${screens[level].screen}) no-repeat center`,
                        backgroundSize: `cover`
                    }}></div>
                </div>}
            <>
                {screens[level].type === 'start' ?
                    <Start
                        addition={addition}
                        question={screens[level].question}
                        answers={screens[level].answers}
                        setAddition={setAddition}
                        nextLevel={nextLevel}
                    /> :
                    screens[level].type === 'karaoke' ?
                        <Karaoke
                            answers={screens[level].answers}
                            nextLevel={nextLevel}
                            setAddition={setAddition}
                            addition={addition}
                        />
                        :
                        screens[level].type === 'standart' ?
                            <div className="interactive">
                                <Standart
                                    addition={addition}
                                    question={screens[level].question}
                                    answers={screens[level].answers}
                                    setAddition={setAddition}
                                    nextLevel={nextLevel}
                                />
                            </div>
                            :
                            screens[level].type === 'tags' ?
                                <div className="interactive">
                                    <Tags
                                        setTag={selectTopic}
                                        tags={screens[level].answers[0].tags}
                                        answers={screens[level].answers}
                                        addition={addition}
                                        addBtn={screens[level].answers[0].additionText}
                                        nextLevel={nextLevel}
                                    />
                                </div>
                                :
                                screens[level].type === 'exception' ?
                                    <></> :
                                    <></>
                }
            </>
        </div>
    )
}

export default Performance;