import React from 'react'
import Hero from "../components/Hero"
import Detail from "../components/Detail"
function ContactPage(props) {
    return (
        <div>
        <Hero title={props.title}/>
        <Detail>
            <p>Email: yeohuaizhe@gmail.com</p>
        </Detail>
        </div>

    )
}
//Can be a function cause it does not need to manage states
export default ContactPage;