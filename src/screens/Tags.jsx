import React from "react";


function Tags({ tags, setTag, answers, addition, nextLevel }) {
    console.log(answers[0])
    return (
        <div className="tags_container flex gap-4 flex-wrap">
            {addition == undefined ?
                <>
                    {tags.map(
                        (tag, id) =>
                        (
                            <button
                                onClick={() => setTag(tag)}
                                className="rounded-sm shadow-md px-4 py-2 cursor-pointer hover:bg-slate-50" key={id}>{tag}</button>
                        )
                    )}
                </> :
                <div className="addition_inner">
                    {answers[0].addition}
                    <button
                        onClick={() => nextLevel()}
                        className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md">{answers[addition].additionButton}</button>

                </div>
            }
        </div>
    )
}


export default Tags;