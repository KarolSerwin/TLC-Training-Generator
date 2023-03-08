import React from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";

const NewTrainingShow = ({training, date}) => {

    const {params, content} = training

    return <div>
        <NewTrainingParams trainingParams={params} date={date}/>
        <NewTrainingContent trainingContent={content} />
    </div>
}

export {NewTrainingShow}