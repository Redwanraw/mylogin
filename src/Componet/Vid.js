import React from "react"

{/* 
                      <video className="  w-75 top-50 start-50" controls src=''  id="change" autoPlay={true}>
                      <source  type="video/mp4" autoPlay={true}/>
                    </video>
                */}
                      {//تغير الرابط
}

      {//تغير الرابط
}

export function changevid(buttonlink) { 
    document.getElementById('change').src = buttonlink ;
}
export  function disblock()
  {//اظهار الفيديو
    document.getElementById("change").style.display = "block"; 
}
function Contact(props){


    return(
        <div className="vid text-center ">
 <div className="text-end">
                    <iframe width="560" height="315" id="change"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 </div>
 <h1>dfdsz</h1>
                  
                  </div>

    )
}
export default Contact;