import React, {useEffect, useState} from "react";
import {NewTrainingGenerator} from "./NewTrainingGenerator/NewTrainingGenerator";
import {NewTrainingShow} from "./NewTrainingShow/NewTrainingShow";
import {trainings} from "../trainings/trainings";

const MyCycle = () => {

    const [newParams, setNewParams] = useState({
            time: "",
            level: "",
            focus: "",
    })

    //funkcja pobierania paramsow z training generator
    const getParams = (params) => {

        setNewParams({
            time: params.time,
            level: params.level,
            focus: params.focus,
        })

        let result = trainings.filter(training => training.params.time === params.time && training.params.level === params.level && training.params.focus === params.focus)

        const newResult = result.pop()


    }


    return <>
        <NewTrainingGenerator getParams={getParams}/>
        <NewTrainingShow />
    </>
}

export {MyCycle}