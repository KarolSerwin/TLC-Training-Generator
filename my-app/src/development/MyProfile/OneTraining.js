import React from "react";


const OneTraining = ({training, index}) => {

    const {id, date, params, content} = training
    return <div key={index} style={{marginLeft: 100, width: 1000}}>

        <h2>From: {date}</h2>
        <br/>
        <h2> {params.time} -- {params.level} -- {params.focus} </h2>
        <div dangerouslySetInnerHTML={{__html: content.a}}/>
        <div dangerouslySetInnerHTML={{__html: content.b}}/>
        <div dangerouslySetInnerHTML={{__html: content.c}}/>
        <div dangerouslySetInnerHTML={{__html: content.d}}/>
        <div dangerouslySetInnerHTML={{__html: content.e}}/>
        <br/>
        <span>training ID: {id}</span>
    </div>

}

export {OneTraining}