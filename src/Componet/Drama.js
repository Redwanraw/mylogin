import React, {useState} from "react"
import { Link } from "react-router-dom";
import icon from "../img/tv.png" ;
import Vid from "./Vid"
import  {changevid ,disblock} from "./Vid"
import Head  from "./head"

export default function Abut(props){




    return(
        <div className="abut">
      {//head
        }
        <Head />
{//head stop
        }


          <div className="black ">
              <h1 className="color-6 font text-center">درما</h1>

              <div> 
                <Vid />
                      <div className="d-flex">
                         <Link to={""} className=" m-1 " onClick={()=>{
                           disblock()
                           changevid("https://www.youtube.com/embed/agbeJyGFmzk")}}>   
       
                          <figure class=" c4-izmir c4-image-zoom-in">  
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2022/jan/amjad/Thump_Saydet_Al_Atmeh_en/original/Thump_Saydet_Al_Atmeh_en.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                           </figure> 
                          </Link>  
                         <Link to={"#"} className=" m-1" onClick={()=>{
                           disblock()
                           changevid("https://www.youtube.com/embed/EPkkcCr3y-E")}}>    
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                             <img src="https://shahidstatic2.akamaized.net//mediaObject/2022/Amr/ramadan/Thump_THE_EIGHT_en/original/Thump_THE_EIGHT_en.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                          </figure> 
                         </Link>  
                         <div className=" m-1">  
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                             <img src="https://shahidstatic3.akamaized.net//mediaObject/2021/Bedour/bedour2/Bedour4/albait_baity_Thump_EN/original/albait_baity_Thump_EN.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure>
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                             <img src="https://shahidstatic5.akamaized.net//mediaObject/2020/No-Tags/BB1_Thumbnail0/original/BB1_Thumbnail0.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  
                   
                    <div className="d-flex">
                         <div className=" m-1">
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic4.akamaized.net//mediaObject/2021/Bedour/bedour2/Bedour4/Thump_AlAnisa_Farah5_EN/original/Thump_AlAnisa_Farah5_EN.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic4.akamaized.net//mediaObject/2020/abdul/SIR_thumb_v2/original/SIR_thumb_v2.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic2.akamaized.net//mediaObject/2022/Mar/Amjad/may/Thump_Aelat_Abd_Hameed_v2_en/original/Thump_Aelat_Abd_Hameed_v2_en.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic4.akamaized.net//mediaObject/2021/Bedour/bedour2/Bedour4/Thump_Billy_the_Kid2/original/Thump_Billy_the_Kid2.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  

                       <div className="d-flex">
                         <div className=" m-1 ">          
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Zawaj_Ella_Robe/original/Thump_Zawaj_Ella_Robe.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                           </figure> 
                          </div>  
                         <div className=" m-1">    
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                             <img src="https://shahidstatic5.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Haya_Al_Rouh/original/Thump_Haya_Al_Rouh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">  
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                              <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/AMREID/RAMDANAMR/hareem_tareq_thump/original/hareem_tareq_thump.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure>
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2022/Mar/Amjad/Thump_Kayd_Al_Hareem/original/Thump_Kayd_Al_Hareem.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  
                   
                    <div className="d-flex">
                         <div className=" m-1">
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/CRM/untitled/untitled/untitled/rawan/Thump_Jawhara_-AR-(1)/original/Thump_Jawhara_-AR-(1).jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2021/AMREID/aa/untitled0/Thump_hoobti_AR/original/Thump_hoobti_AR.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/NOV/Amjad/untitled/Thump_Saydet_Al_Atmeh/original/Thump_Saydet_Al_Atmeh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic5.akamaized.net//mediaObject/Curation-2021/Heros/DEC/AR_Thump_hob_Fi_Alradio/original/AR_Thump_hob_Fi_Alradio.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  

                    <div className="d-flex">
                         <div className=" m-1 ">          
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Zawaj_Ella_Robe/original/Thump_Zawaj_Ella_Robe.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                           </figure> 
                          </div>  
                         <div className=" m-1">    
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                             <img src="https://shahidstatic5.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Haya_Al_Rouh/original/Thump_Haya_Al_Rouh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">  
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                              <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/AMREID/RAMDANAMR/hareem_tareq_thump/original/hareem_tareq_thump.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure>
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2022/Mar/Amjad/Thump_Kayd_Al_Hareem/original/Thump_Kayd_Al_Hareem.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  
                   
                    <div className="d-flex">
                         <div className=" m-1">
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/CRM/untitled/untitled/untitled/rawan/Thump_Jawhara_-AR-(1)/original/Thump_Jawhara_-AR-(1).jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2021/AMREID/aa/untitled0/Thump_hoobti_AR/original/Thump_hoobti_AR.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/NOV/Amjad/untitled/Thump_Saydet_Al_Atmeh/original/Thump_Saydet_Al_Atmeh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic5.akamaized.net//mediaObject/Curation-2021/Heros/DEC/AR_Thump_hob_Fi_Alradio/original/AR_Thump_hob_Fi_Alradio.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  
                      <div className="d-flex">
                         <div className=" m-1 ">          
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Zawaj_Ella_Robe/original/Thump_Zawaj_Ella_Robe.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                           </figure> 
                          </div>  
                         <div className=" m-1">    
                          <figure class="  c4-izmir  c4-image-zoom-in">  
                             <img src="https://shahidstatic5.akamaized.net//mediaObject/2022/Mar/Amjad/untitled/Thump_Haya_Al_Rouh/original/Thump_Haya_Al_Rouh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                           <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                           </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">  
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                              <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/AMREID/RAMDANAMR/hareem_tareq_thump/original/hareem_tareq_thump.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure>
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">               
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2022/Mar/Amjad/Thump_Kayd_Al_Hareem/original/Thump_Kayd_Al_Hareem.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  
                   
                    <div className="d-flex">
                         <div className=" m-1">
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/CRM/untitled/untitled/untitled/rawan/Thump_Jawhara_-AR-(1)/original/Thump_Jawhara_-AR-(1).jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic3.akamaized.net//mediaObject/2021/AMREID/aa/untitled0/Thump_hoobti_AR/original/Thump_hoobti_AR.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic1.akamaized.net//mediaObject/2021/NOV/Amjad/untitled/Thump_Saydet_Al_Atmeh/original/Thump_Saydet_Al_Atmeh.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                         <div className=" m-1">               
                          <figure class="  c4-izmir  c4-image-zoom-in">                        
                           <img src="https://shahidstatic5.akamaized.net//mediaObject/Curation-2021/Heros/DEC/AR_Thump_hob_Fi_Alradio/original/AR_Thump_hob_Fi_Alradio.jpg?height=307.5&width=546&croppingPoint=&version=1&type=webp" className="card-img-top  " alt="..."/>
                            <figcaption>
                             <h6 className="font-w0">مشاهدة</h6>
                            </figcaption>
                          </figure> 
                         </div>  
                      </div>  

                    </div>
                  </div>
          </div>
    )
}