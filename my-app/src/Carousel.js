import React from "react";

import pic1 from "./development/Images/DSC_6569.jpg"
import pic2 from "./development/Images/DSC_6756.jpg"
import pic3 from "./development/Images/DSC_6611.jpg"
import pic4 from "./development/Images/DSC_6613.jpg"

import "./carousel.scss"
import Carousel from "nuka-carousel";


const CarouselMain = () => {

    const styles = {
        wrapAround: true,
        animation: "zoom",
        style: {
            width: 1600,
            height: "50vh",
        }

    }

    return <div className="carousel">
        <Carousel {...styles}>
            <img  alt="" src={pic1}/>
            <img  alt="" src={pic2}/>
            <img  alt="" src={pic3}/>
            <img  alt="" src={pic4}/>
        </Carousel>
    </div>


}

export {CarouselMain}