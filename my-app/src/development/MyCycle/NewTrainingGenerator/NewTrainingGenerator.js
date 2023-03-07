import React, {useState} from "react";

import {TrainingTime} from "./TrainingTime";
import {TrainingLevel} from "./TrainingLevel";
import {TrainingFocus} from "./TrainingFocus";
import {ButtonGenerate} from "./ButtonGenerate";

const NewTrainingGenerator = ({getParams}) => {

    const [params, setParams] = useState({
        time: "",
        level: "",
        focus: "",
    })


    const updateState = (key, value) => {
        setParams(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    /*const updateTime = (newTime) => {
        setParams( prevState => {
                return {
                    ...prevState,
                    time: newTime
                }})
    }*/

    const updateLevel = (newLevel) => {
        setParams( prevState => {
                return {
                    ...prevState,
                    level: newLevel
                }})
    }

    const updateFocus = (newFocus) => {
        setParams( prevState => {
            return {
                ...prevState,
                focus: newFocus
            }})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getParams(params)

        setParams({
            time: "",
            level: "",
            focus: "",
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Select options for your Training</h1>
            <TrainingTime updateTime={updateState}/>
            <TrainingLevel updateLevel={updateLevel}/>
            <TrainingFocus updateFocus={updateFocus}/>
            <ButtonGenerate onClick={handleSubmit}/>
        </form>
    )
}

export {NewTrainingGenerator}