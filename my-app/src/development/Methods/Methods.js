import React from "react";
import "./methods.scss"
import {intro} from "./description";
import pic1 from "./Images/ja i Olivier.png"

const Methods = () => {

    return <div className="methods-container">
        <section>
            <h1>Introduction</h1>
            <div className="methods-container-intro" dangerouslySetInnerHTML={{__html: intro}}/>
        </section>
        <div className="photo-box">
            <img alt="" src={pic1}/>
        </div>

        <section id="level">
            <h1>What is your level?</h1>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet magni maiores necessitatibus nesciunt nobis porro sunt. Architecto consectetur, doloremque ipsa magni molestiae nobis odio officiis quia sit sunt voluptatem.</span><span>At aut blanditiis consequuntur culpa molestias necessitatibus optio quod sint! Ad, at commodi debitis delectus, dolorem doloribus facere fugiat, hic molestias nemo optio perspiciatis quis quod repellat totam voluptate voluptates?</span><span>Architecto cum nisi quia? Asperiores consequatur, culpa doloremque enim excepturi fugiat laudantium maiores nam odit perspiciatis quia veniam vitae voluptates! Alias dignissimos inventore minima quae quia vel velit veritatis. Labore.</span><span>Architecto at beatae debitis earum illum ipsam iste natus nisi nulla numquam officia pariatur ratione rerum saepe, sequi similique suscipit tempore voluptas. Consequuntur deleniti dolores, fugit maiores quidem rerum tempore?</span><span>Aspernatur at aut consequatur dolor eius eveniet expedita illum incidunt ipsam iusto laborum minima modi natus necessitatibus neque, non odit optio possimus quasi quis recusandae repudiandae temporibus vel vero voluptatum?</span><span>Assumenda at exercitationem facere harum illum in labore nihil odit qui quidem quis quo repellat sequi, tempora temporibus. Adipisci blanditiis commodi dicta dolore dolores libero obcaecati perferendis sapiente ut veniam!</span></p>
        </section>

        <section id="time">
            <h1>Training time</h1>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet magni maiores necessitatibus nesciunt nobis porro sunt. Architecto consectetur, doloremque ipsa magni molestiae nobis odio officiis quia sit sunt voluptatem.</span><span>At aut blanditiis consequuntur culpa molestias necessitatibus optio quod sint! Ad, at commodi debitis delectus, dolorem doloribus facere fugiat, hic molestias nemo optio perspiciatis quis quod repellat totam voluptate voluptates?</span><span>Architecto cum nisi quia? Asperiores consequatur, culpa doloremque enim excepturi fugiat laudantium maiores nam odit perspiciatis quia veniam vitae voluptates! Alias dignissimos inventore minima quae quia vel velit veritatis. Labore.</span><span>Architecto at beatae debitis earum illum ipsam iste natus nisi nulla numquam officia pariatur ratione rerum saepe, sequi similique suscipit tempore voluptas. Consequuntur deleniti dolores, fugit maiores quidem rerum tempore?</span><span>Aspernatur at aut consequatur dolor eius eveniet expedita illum incidunt ipsam iusto laborum minima modi natus necessitatibus neque, non odit optio possimus quasi quis recusandae repudiandae temporibus vel vero voluptatum?</span><span>Assumenda at exercitationem facere harum illum in labore nihil odit qui quidem quis quo repellat sequi, tempora temporibus. Adipisci blanditiis commodi dicta dolore dolores libero obcaecati perferendis sapiente ut veniam!</span></p>
        </section>

        <section id="focus">
            <h1>Training focus</h1>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet magni maiores necessitatibus nesciunt nobis porro sunt. Architecto consectetur, doloremque ipsa magni molestiae nobis odio officiis quia sit sunt voluptatem.</span><span>At aut blanditiis consequuntur culpa molestias necessitatibus optio quod sint! Ad, at commodi debitis delectus, dolorem doloribus facere fugiat, hic molestias nemo optio perspiciatis quis quod repellat totam voluptate voluptates?</span><span>Architecto cum nisi quia? Asperiores consequatur, culpa doloremque enim excepturi fugiat laudantium maiores nam odit perspiciatis quia veniam vitae voluptates! Alias dignissimos inventore minima quae quia vel velit veritatis. Labore.</span><span>Architecto at beatae debitis earum illum ipsam iste natus nisi nulla numquam officia pariatur ratione rerum saepe, sequi similique suscipit tempore voluptas. Consequuntur deleniti dolores, fugit maiores quidem rerum tempore?</span><span>Aspernatur at aut consequatur dolor eius eveniet expedita illum incidunt ipsam iusto laborum minima modi natus necessitatibus neque, non odit optio possimus quasi quis recusandae repudiandae temporibus vel vero voluptatum?</span><span>Assumenda at exercitationem facere harum illum in labore nihil odit qui quidem quis quo repellat sequi, tempora temporibus. Adipisci blanditiis commodi dicta dolore dolores libero obcaecati perferendis sapiente ut veniam!</span></p>
        </section>
    </div>
}

export {Methods}