import React, {useRef} from "react";
import {NewTrainingParams} from "./NewTrainingParams";
import {NewTrainingContent} from "./NewTrainingContent";


import ReactToPrint from 'react-to-print'


const NewTrainingShow = ({training, date, showButton}) => {

    const componentRef = useRef();

    const {params, content} = training



    return <div>

        <div ref={componentRef}>
            <NewTrainingParams  trainingParams={params} date={date}/>
            <NewTrainingContent  trainingContent={content} />
        </div>
        <ReactToPrint trigger={() => <button style={{display: showButton ? "block" : "none"}}>Print or Download</button> } content={() => componentRef.current} />

    </div>
}

export {NewTrainingShow}