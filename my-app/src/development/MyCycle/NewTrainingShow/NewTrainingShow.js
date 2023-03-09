import React, {useRef} from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";
import "./trainingShow.css"

import ReactToPrint from 'react-to-print'


const NewTrainingShow = ({training, date, showButton}) => {

    const componentRef = useRef();

    const {params, content} = training

 /*   const handleClick = () => {

        localStorage.setItem()
    }*/

    return <div>

        <div ref={componentRef}>
            <NewTrainingParams  trainingParams={params} date={date}/>
            <NewTrainingContent  trainingContent={content} />
        </div>
        <div style={{display: showButton ? "flex" : "none"}} className="trainingShowButtonsWrap">
        <button >Save Training</button>
        <ReactToPrint bodyClass="pdf"
                      documentTitle="TLC training"
                      trigger={() => <button>Print or Download</button>}
                      content={() => componentRef.current} />
        </div>

    </div>
}

export {NewTrainingShow}