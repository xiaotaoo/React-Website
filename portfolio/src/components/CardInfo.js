import React from 'react'
import {useSpring, animated} from "react-spring"
import "./card.css"
function CardInfo(props) {

    const style= useSpring({opacity:1, from:{opacity:0}});

    return (
        <animated.div className="h-card-info" style={style}>
            <p className="h-card-title">{props.title}</p>
            <p className="h-card-subtitle">{props.subtitle}</p>
            <a href={props.link} target="blank" rel="noopener norefferer">View</a>
        </animated.div>
    )//using the props obtained from card<carousel, target=blank brings the user to a new tab
}

export default CardInfo;