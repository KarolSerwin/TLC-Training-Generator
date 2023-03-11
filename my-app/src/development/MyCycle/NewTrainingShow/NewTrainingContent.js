import React from "react";
import "./trainingShow.scss"

const NewTrainingContent = ({trainingContent}) => {

    const {a, b, c, d, e} = trainingContent

    return <div  className="trainingContent" >
        <div dangerouslySetInnerHTML={{__html: a}}/>
        <div dangerouslySetInnerHTML={{__html: b}}/>
        <div dangerouslySetInnerHTML={{__html: c}}/>
        <div dangerouslySetInnerHTML={{__html: d}}/>
        <div dangerouslySetInnerHTML={{__html: e}}/>
    </div>
}

export {NewTrainingContent}