import React from "react";
import "./about.css";

export default function about() {
    return (
        <div className="about">
            <div className="myDetails">
                <div className="Hi">
                    Hi, I am
                </div>
                <div className="name">
                    Nayanjith
                </div>
                <div className="web-">
                    <span>Web</span>
                    <span className="animateText"></span>
                </div>
                <div className="aboutDetails">
                A computer science student with a strong dedication to become a successful Web Developer or Designer. In search of opportunities to showcase my inner creativity and skills.
                </div>
            </div>
            <div className="aboutimages">
                <img className="myPhoto" src="/myPhoto.png"/>
                <div className="vector">
                    <img className="vector1" src="/Vector1.png"/>
                    <img className="vector2" src="/Vector2.png"/>
                </div>
                <div className="aboutResume">Resume</div>
            </div>
        </div>
    )
}