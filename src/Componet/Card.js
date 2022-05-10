import React from "react"
export default function Card(props){
    return(
        <div className="Card">
            <span style={{backgroundColor: props.obj.color}}>my title: {props.obj.title}</span>
            <img className="img1" src={props.obj.img}/>

        </div>
    )
    }