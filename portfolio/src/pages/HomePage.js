import React from 'react'
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Carousel/>
        </div>
    )//title, subtitle and text are passed in from the app.js page
}
//Can be a function cause it does not need to manage states
export default HomePage;