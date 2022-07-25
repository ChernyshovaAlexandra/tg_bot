import React, { useEffect } from "react";
import SoundLevel from "../components/SoundLevel";


function Standart({ addition, question, answers, setAddition, nextLevel, sound }) {
    return (
        <> {addition == undefined ?
            <div className="answer_inner">
                <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: question }}></div>
                <div className="answers flex gap-4 mt-4">
                    {sound ?
                        <SoundLevel setAddition={setAddition} />
                        :
                        answers.map(
                            (ans, id) => (
                                <button
                                    onClick={() => setAddition(id)}
                                    className="block mx-auto shadow-sm bg-slate-100 rounded-md" key={id} dangerouslySetInnerHTML={{ __html: ans.text }}></button>
                            )
                        )}
                </div>
            </div> :
            <div className="addition_inner">
                {answers[addition].addition ?
                    <>
                        <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: answers[addition].addition }}></div>
                        <button
                            onClick={() => nextLevel()}
                            className="block mx-auto mt-4 shadow-sm bg-slate-100 rounded-md">{answers[addition].additionButton}</button>
                    </> :
                    <>
                        <button onClick={nextLevel()}></button>
                    </>
                }
            </div>
        }
        </>

    )
}

export default Standart;