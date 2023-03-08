import React from "react";


const NewTrainingContent = ({trainingContent}) => {

    const {a, b, c, d, e} = trainingContent

    return <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{d}</li>
        <li>{e}</li>
    </ul>
}

export {NewTrainingContent}