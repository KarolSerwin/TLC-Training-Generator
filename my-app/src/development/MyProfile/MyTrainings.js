import React from "react";
import {OneTraining} from "./OneTraining";
import Carousel from "nuka-carousel";


const MyTrainings = ({trainings}) => {



    const reverseTrainings = trainings.reverse()

    const styles = {
            wrapAround: false,
            animation: "zoom",
            style: {
                width: 1200,
                height: "60vh",
                marginTop: 50,
                marginLeft: 50
            }

        }

        return <div className="carousel">
            <Carousel {...styles}>
                {trainings ? reverseTrainings.map((training, index) => <OneTraining index={index} training={training}/>) : <h2> You don't have any workout yet </h2>}
            </Carousel>
        </div>


}

export {MyTrainings}