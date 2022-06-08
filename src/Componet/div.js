import React from "react"
import Dama from "./Drama"

export default function Contact(props){
function changevid1(){
    document.getElementById("change").style.display = "none"; 
}
    return(
        <div className="Contact">
            <div className="text-center">
<button onClick={()=>{changevid1
()}}>video 2</button>

<video controls src=""   autoPlay={true}>
  <source  type="video/mp4" autoPlay={true}></source>
</video>
<Dama changevid={props.changevid}/>
</div>

        </div>
    )
}