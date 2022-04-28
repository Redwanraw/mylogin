import React, {useState} from "react"
import Contact from "./Contact"
export default function Abut(props){
    return(
        <div className="abut">
            <p>my name: {props.name}</p>
            <p>my pothsn: {props.pothsn}</p>

            <Contact me={props.obj}/>
        </div>
    )
}