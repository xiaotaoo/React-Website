import React, { Component } from 'react'
import naruto from "../assets/images/Naruto.jpg"
import luffy from "../assets/images/Luffy.jpg"
import ichigo from "../assets/images/Ichigo.png"
import Card from "../components/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
export class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:0,
                    title:"Naruto",
                    subtitle:"Action/Fantasy",
                    imgsrc: naruto,
                    link: "https://en.wikipedia.org/wiki/Naruto",
                    selected: false
                },
                {
                    id:1,
                    title:"One Piece",
                    subtitle:"Pirates",
                    imgsrc: luffy,
                    link: "https://en.wikipedia.org/wiki/One_Piece",
                    selected: false
                },
                {
                    id:2,
                    title:"Bleach",
                    subtitle:"Supernatural",
                    imgsrc: ichigo,
                    link: "https://en.wikipedia.org/wiki/Bleach_(TV_series)",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) =>{
        let items = [...this.state.items]; //get us all the items

        items[id].selected = items[id].selected ? false:true; //go to the item matching the id of the selected and toggle boolean
        items.forEach(item=>{
            if (item.id!==id){
                item.selected=false; //if the id of the selected does not match, do not toggle
            }
        });

        this.setState({
            items
        })
    }

    makeItems= (items) =>{
        return items.map(item=>{
            return <Card item={item} onClick={(e=> this.handleCardClick(item.id, e))} key={item.id}/> //passing each item id into Card component as a prop
        })
    }
    render() {
        return (
            <Container fluid={true} >
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}


export default Carousel;
