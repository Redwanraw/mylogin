import React , {useState} from "react"
import registration from "../img/registration.png"
import lock from "../img/lock.png" 
import imgicom from "../img/correct.png" 
import add_user from "../img/add-user.png" 
import Login from "./Login"


export default function Register(props){
const [user,setuser]=useState('')
const [email,setemail]=useState('')
const [password, setpassword] = useState('')
const [check, setcheck] = useState('')
 
const checkuser=(()=>{
    if(email===props.userInfo.email && password===props.userInfo.password && user===props.userInfo.user){
        setcheck(true)
    }else{
        setcheck(false)
    }
    
})

  
    return(
        <div className="Register">
        <form className=" mt-5 w-50 text-center position-absolute top-50 start-50 translate-middle " id="forms" >
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
                    setuser(e.target.value)}} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input onChange={(e)=>{
                    setemail(e.target.value)
                }} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span  className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">🔑</span>
                <input onChange={(e)=>{
                    setpassword(e.target.value)
                }} type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" />
            </div>

            <div className="text-start">
                <img src={lock} /> <a  href="" className="text-dark me-2 font ">Forgot your password </a>
           
                        <img src={add_user} /> <a href="" onClick={(e)=>{
                            props.onClick()
                            e.preventDefault()}}  className="text-dark  font">login </a>

            </div>
            <a ><button onClick={(e)=>{
                e.preventDefault()
                checkuser() }} type="button d-block" className="btn btn-light"><a >Light</a></button>
</a>
            </form>
            

        </div>
    )
}