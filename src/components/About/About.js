import React from 'react'
import Banner from 'react-js-banner';
import { makeStyles } from '@material-ui/core/styles';
import "./About.css"

function About() {
    return (
        <div className="about">
        <div>
        <Banner showBanner={true} className="banner__about">
        <div>
            <h3 className="about__header">About me!</h3>
            <div>
                <p className="about__body">
                 Hi, my name is Manjot and I'm a passionate Full Stack Web Developer and Mobile App Developer 
                 with experience in building applications with JavaScript, Reactjs, Nodejs, Python, Typescript, along
                 with other fun libraries and frameworks! Keep scrolling to learn more abbout my projects and skills.  
                </p>
            </div>
        </div>
        </Banner>
        </div>
       </div>
    )
}

export default About
