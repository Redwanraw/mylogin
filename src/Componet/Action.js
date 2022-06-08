import React from "react"
import { Link } from "react-router-dom";
import icon from "../img/tv.png" ;

export default function Contact(props){
    return(
        <div className="Contact">
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
        </div>
    )
}