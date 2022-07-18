import React, { useEffect } from "react";


function Standart({ addition, question, answers, setAddition, nextLevel }) {
    return (
        <>
            {addition == undefined ?
                <div className="anser_inner">
                    <div>{question}</div>
                    <div className="answers flex justify-center	gap-4 mt-4">
                        {answers.map(
                            (ans, id) => (
                                <button
                                    onClick={() => setAddition(id)}
                                    className="block shadow-sm bg-slate-100 px-4 py-2 rounded-md" key={id}>{ans.text}</button>
                            )
                        )}
                    </div>
                </div> :
                <div className="addition_inner">
                    {answers[addition].addition ?
                        <>
                            {answers[addition].addition}
                            <button
                                onClick={() => nextLevel()}
                                className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md">{answers[addition].additionButton}</button>
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