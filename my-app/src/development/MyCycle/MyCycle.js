import React, {useEffect, useState} from "react";
import {NewTrainingGenerator} from "./NewTrainingGenerator/NewTrainingGenerator";
import {NewTrainingShow} from "./NewTrainingShow/NewTrainingShow";
import {trainings} from "../trainings/trainings";

const MyCycle = () => {

    const [newParams, setNewParams] = useState({

        params: {
            time: "",
            level: "",
            focus: ""
        },
        content: {
            a: "",
            b: "",
            c: "",
            d: "",
            e: ""
        }
    })

    //funkcja pobierania paramsow z training generator
    const getParams = (params) => {

        setNewParams(prevState => {
            return {
                ...prevState,
                params: {
                    time: params.time,
                    level: params.level,
                    focus: params.focus
                }
            }
        })

        let result = trainings.filter(training => training.params.time === params.time && training.params.level === params.level && training.params.focus === params.focus)
        const newResult = result.pop()

        setNewParams(prevState => {
            return {
                ...prevState,
                content: {
                    a: newResult.content.a,
                    b: newResult.content.b,
                    c: newResult.content.c,
                    d: newResult.content.d,
                    e: newResult.content.e
                }
            }
        })

    }


    return <>
        <NewTrainingGenerator getParams={getParams}/>
        <NewTrainingShow training={newParams}/>
    </>
}

export {MyCycle}