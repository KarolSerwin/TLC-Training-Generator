import React, {useState} from "react";
import {NewTrainingGenerator} from "./NewTrainingGenerator/NewTrainingGenerator";
import {NewTrainingShow} from "./NewTrainingShow/NewTrainingShow";
import {trainings} from "../trainings/trainings";

import "./myCycle.css"
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

    const [date, setDate] = useState("");

    const [showButtonPrint, setShowButtonPrint] = useState(false)

    //funkcja pobierania paramsow z training generator oraz generowania daty
    const getParams = (params) => {

        const {time, level, focus} = params

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

        let result = trainings.filter(training => training.params.time === time && training.params.level === level && training.params.focus === focus)
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

        setDate(new Date().toLocaleString())

        setShowButtonPrint(true)

    }

    return <>
        <div className="trainingGenerator">
        <NewTrainingGenerator getParams={getParams}/>
        <NewTrainingShow showButton={showButtonPrint} training={newParams} date={date}/>
        </div>
    </>
}

export {MyCycle}