import React from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";
import {ButtonsSaveAndDownload} from "./ButtonsSaveAndDownload";

const NewTrainingShow = ({training, date, areButtonsActive}) => {

    const {params, content} = training





    return <div>
        <NewTrainingParams trainingParams={params} date={date}/>
        <NewTrainingContent trainingContent={content} />
        <ButtonsSaveAndDownload areButtonsActive={areButtonsActive}/>
    </div>
}

export {NewTrainingShow}