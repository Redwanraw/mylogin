import React,{useState,i} from "react";

export default function Lickcount(props){
    
    const [count , setcount]=useState(0)
    const inccount=()=>{
console.log('lack')   
setcount(setcount+1)

}

    return(
        <div className="Contact">
            
           <img className="img1" src={props.obj.img}/>
           <p className="">my name:{props.obj.name} <br/>age: {props.obj.age}</p>
           <p className="">👍 {inccount} </p>
        </div>
    )
}