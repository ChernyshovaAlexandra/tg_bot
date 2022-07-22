import React, { useState } from "react";


function Tags({ tags, setTag, answers, addition, nextLevel, addBtn }) {
    const [activeTag, setActiveTag] = useState(undefined)

    const selectTopic = (id) => {
        setActiveTag(id)
    }
    
    return (
        <div className="tags_container flex gap-4 flex-wrap ">
            {addition == undefined ?
                <>
                    {tags.map(
                        (tag, id) =>
                        (
                            <button
                                onClick={() => selectTopic(id)}
                                className={`tag rounded-sm shadow-md px-4 py-2 cursor-pointer hover:bg-slate-50 ${activeTag == id ? "selected" : ""}`}
                                key={id}
                                style={{
                                    background: tag.bg,
                                    zoom: tag.zoom
                                }}
                            >{tag.name}</button>
                        )
                    )}
                    <button
                        onClick={() => setTag()}
                        disabled={activeTag === undefined ? true : false}
                        className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md">{addBtn}</button>
                </> :
                <div className="addition_inner">
                    <div className="question_block mx-auto p-8">
                        {answers[addition].addition}
                    </div>
                    <button
                        onClick={() => nextLevel()}
                        className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md">{answers[addition].additionButton}</button>

                </div>
            }
        </div>
    )
}


export default Tags;