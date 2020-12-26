import React from 'react'
import CardInfo from "./CardInfo"
import "./card.css"
function Card(props) {
    return (
        <div className="h-card d-inline-block" onClick={(e)=>props.onClick(props.item)}>
            <img className="h-card-image" src={props.item.imgsrc} alt={props.item.imgsrc}/>
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>//passing the props further into cardinfo
    )//&& is conditional, for this case if props.item.selected is true, then show card info
}

export default Card;