import React,{useState,i} from "react";
import { Link } from "react-router-dom";
import icon from "../img/tv.png" ;

export default function Lickcount(props){
    

    return(
        <div className="Contact black">
      {//hider
        }
            <nav className="navbar sticky-top navbar-expand-lg navbar-light warning">
        <div className="container-fluid">
        <button className="navbar-toggler border " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex me-auto m-3 ">
                <button className="btn btn-outline-dark text-center font color-6 border me-1" type="submit">بحث</button>
                    <input className="form-control me-2 border warning font rtl" type="search" dir="rtl" placeholder="ما الذي تبحث عنه؟" aria-label="Search"/>
                </form>

                <ul className="navbar-nav  justify-content-end mb-2 mb-lg-0 rigth me-3 my-3">
                    <li className="nav-item text-end">
                        <Link to={'/Romantic'} ><a className="nav-link active font " aria-current="page" href="#"><p className="color-6">رومنسي</p></a></Link>
                    </li>
                    <li className="nav-item text-end font ">
                        <Link  to={'/Comedy'}><a className="nav-link"><p className="color-6">كوميدي </p></a></Link>
                    </li>
                    <li className="nav-item dropdown text-end ">
                       <Link to={'/Drama'} > <a className="nav-link font"> <p className="color-6">درما</p> </a></Link>
                    </li>
                    <li className="nav-item text-end">
                      <Link to={'/Action'}>  <a className="nav-link disabled font "> <p className="color-6 ">اكشن</p></a></Link>
                    </li>
                </ul>


            </div>
           <Link to={"/Api"}> <a className="navbar-brand text-rigth  hadey font" ><img src={icon} /></a></Link>

        </div>
    </nav>
{//hider stop
        }
            <div className="w-100">
                <h1 className="color-6 text-center w-100 font ">كوميدي</h1>
                                        <h2 className=" font-w0 color-6 m-4 text-end font">أحدث المسلسلات الخليجية</h2>
                        
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner ">
                    <div className="carousel-item active"> 
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
                    </div>
                    <div className="carousel-item ">
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

            </div>

     
        </div>
    )
}