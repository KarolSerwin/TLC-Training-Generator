import React from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";

const NewTrainingShow = ({training}) => {

    return <>
        <NewTrainingParams trainingParams={training.params}/>
        <NewTrainingContent trainingContent={training.content}/>
    </>
}

export {NewTrainingShow}