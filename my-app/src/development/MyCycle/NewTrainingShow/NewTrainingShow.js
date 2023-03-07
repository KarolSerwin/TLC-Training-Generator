import React from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";

const NewTrainingShow = ({training, date}) => {

    return <>
        <NewTrainingParams trainingParams={training.params} date={date}/>
        <NewTrainingContent trainingContent={training.content} />
    </>
}

export {NewTrainingShow}