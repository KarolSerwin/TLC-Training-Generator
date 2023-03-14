import React from "react";

import pic1 from "./development/Images/pic1.jpg"
import pic2 from "./development/Images/pic2.jpg"
import pic3 from "./development/Images/pic3.jpg"
import pic4 from "./development/Images/pic4.jpg"
import pic5 from "./development/Images/pic5.jpg"


import Carousel from "nuka-carousel";


const CarouselMain = () => {

    const styles = {
        wrapAround: true,
        animation: "zoom",
        cellAlign: "center",
        scrollMode: "page",
        style: {
            width: 1600,
            height: "50vh",
            borderRadius: 10,
            marginBottom: 10

        }

    }

    return <div className="carousel carouselMain">
        <Carousel  {...styles}>
            <img  alt="" src={pic3}/>
            <img  alt="" src={pic2}/>
            <img  alt="" src={pic4}/>
            <img  alt="" src={pic1}/>
            <img  alt="" src={pic5}/>
        </Carousel>
    </div>


}

export {CarouselMain}