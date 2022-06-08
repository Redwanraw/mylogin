import React , {useState} from "react"
import registration from "../img/log.png"
import lock from "../img/lock.png" 
import add_user from "../img/add-user.png" 
import {  BrowserRouter as  Route, Routes } from 'react-router-dom'
import Api from "./Api"

import { Link } from "react-router-dom"

 function Login(props){
     //user
    const [email,setemail]=useState('')
    //pass
    const [password, setpassword] = useState('')
         //تحقق من user and pass

    const [check, setcheck] = useState('')
    const checkuser=(()=>{
        if(email===props.userInfo.email && password===props.userInfo.password){
            setcheck(true)
        }else{
            setcheck(false)
        }
        
    })
    
    check === true &&
    (
     
            window.location.href = "./Api"
    )
 //تحقق من user and pass srop

    return(
        <div className="Login">
        

        <form className=" mt-5 w-50 text-center position-absolute top-42 start-50 translate-middle " id="forms" action="/index.html">
        <img className="w-50 my-3" src={registration} />
    
    {    
      check === false &&(
    <>
       <div className="alert alert-danger   d-flex align-items-center  " id="" role="alert">
          <div >🛑Incorrect password or username  </div>
      </div> 
    </>)}

            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">@</span>
                <input onChange={(e)=>{ setemail(e.target.value)}} type="text" className="form-control color-btn" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input onChange={(e)=>{setpassword(e.target.value)}} type="text" className="form-control color-btn" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text " id="basic-addon2">@Gmail.com</span>
            </div>

            <div className="text-start">
                <img src={lock} /> <a href="" className="text-dark me-2 font ">Forgot your password </a>
                <img src={add_user} /> <Link to={'/'} className="text-dark  font">Create a new account</Link>

            </div>

            
            <button onClick={(e)=>{
                checkuser()
                e.preventDefault()
               
            }
                
                } type="button d-block" className="btn btn-light color-btn border" >Login </button>
            
            </form>

            <div class="m-3">
              <a href="#" class="social-icon my-1">
                <i class="fab fa-facebook-f "></i>
              </a>
              <a href="#" class="social-icon my-1">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon my-1">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon my-1">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
        </div>
    )
}
export default Login;