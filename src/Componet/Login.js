import React , {useState} from "react"
import registration from "../img/registration.png"
import lock from "../img/lock.png" 
import add_user from "../img/add-user.png" 
import Register from "./Register"
import imgicom from "../img/correct.png" 
export default function Login(props){
    const [email,setemail]=useState('')
    const [password, setpassword] = useState('')
    const [check, setcheck] = useState('')
     
    const checkuser=(()=>{
        if(email===props.userInfo.email && password===props.userInfo.password){
            setcheck(true)
        }else{
            setcheck(false)
        }
        
    })
    
    return(
        <div className="Login">

        <form className=" mt-5 w-50 text-center position-absolute top-50 start-50 translate-middle " id="forms" action="/index.html">
        <img className="w-50 my-2" src={registration} />
    
    {
    check === true &&
    (
    <>
      <div className="alert alert-success d-flex align-items-center " id="" role="alert">
         <div ><img src={imgicom}/> 
            An example success alert with an icon
         </div>
      </div>        
    </>
    )}

    {    
      check === false &&
    (
    <>
    <div className="alert alert-danger   d-flex align-items-center  " id="" role="alert">
        <div className="">🛑Incorrect password or username  </div>
    </div>
     </>
     )}





            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">@</span>
                <input onChange={(e)=>{
                    setemail(e.target.value)}} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input onChange={(e)=>{setpassword(e.target.value)}} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="text-start">
                <img src={lock} /> <a href="" className="text-dark me-2 font ">Forgot your password </a>
                <img src={add_user} /> <a onClick={()=>{props.onClick()}} className="text-dark  font">Create a new account </a>

            </div>
            <button onClick={(e)=>{
                checkuser()
                e.preventDefault()}} type="button d-block" className="btn btn-light" >Light</button>

            </form>
        </div>
    )
}