import React from 'react'
import Hero from "../components/Hero"
import Content from "../components/Content"

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hello, my name is Huai Zhe, a mechanical engineering undergraduate studying in the University of Singapore.</p>
                
                <p>This website is an attempt from me to start learning react JS</p>
            </Content>
        </div>
    )//this title is passed into about page from app.js
}
//Can be a function cause it does not need to manage states
export default AboutPage;