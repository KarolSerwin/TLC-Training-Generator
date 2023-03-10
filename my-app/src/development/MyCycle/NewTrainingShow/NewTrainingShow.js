import React, {useRef} from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";
import "./trainingShow.css"

import ReactToPrint from 'react-to-print'


const NewTrainingShow = ({training, date, showButtons}) => {

    const componentRef = useRef();

    const {params, content} = training


    const handleClickSave = () => {


        const {id, params, content} = training
        const firstNewTraining = [{id, date, params, content}]
        const newTraining = {id, date, params, content}

        if (localStorage.getItem("trainings")) {

            const previousTrainings = JSON.parse(localStorage.getItem("trainings"))
            const actualTrainings = [...previousTrainings, newTraining ]
            localStorage.setItem("trainings", JSON.stringify(actualTrainings))

        } else {
            localStorage.setItem("trainings", JSON.stringify(firstNewTraining))
        }
    }

    const handleClickReset = () => {
        window.location.reload();
    }

    return <div>

        <div ref={componentRef}>
            <NewTrainingParams  trainingParams={params} date={date}/>
            <NewTrainingContent  trainingContent={content} />
        </div>
        <div style={{display: showButtons ? "flex" : "none"}} className="trainingShowButtonsWrap">
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickSave}>Save Training</button>
            <ReactToPrint bodyClass="pdf"
                          documentTitle="TLC training"
                          trigger={() => <button>Print or Download</button>}
                          content={() => componentRef.current} />
        </div>

    </div>
}

export {NewTrainingShow}