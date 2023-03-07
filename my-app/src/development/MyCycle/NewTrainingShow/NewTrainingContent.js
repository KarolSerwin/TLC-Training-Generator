import React from "react";


const NewTrainingContent = ({trainingContent}) => {

    return <ul>
        <li>{trainingContent.a}</li>
        <li>{trainingContent.b}</li>
        <li>{trainingContent.c}</li>
        <li>{trainingContent.d}</li>
        <li>{trainingContent.e}</li>
    </ul>
}

export {NewTrainingContent}