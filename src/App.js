import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState,useEffect } from 'react';
import './App.css';
import Lickcount from './Componet/Lickcount';
import Abut from './Componet/Abut';
import jsimg from './img/1.png';
import Register from './Componet/Register';
import Login from './Componet/Login';
import axios from 'axios';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Api from "./Componet/Api"

function App() {

{/*



  const areyy=[
   {name:"redwan",age:'25', img:jsimg },
   {name:"ragb",age:'30' ,img:jsimg},
   {name:"mohmd",age:'40', img:jsimg},
   
  ]


  const areyy2 = areyy.map((elem , i)=>{
    return <Abut obj={elem} key={i} />
  });
{/*
  const areyy3 = areyy.map((elem , i)=>{

  return <Lickcount obj={elem} key={i}/>

  });
*/}

const [ isLoginPage,setisLoginPage]=useState(true)
const [user, setuser] = useState({email:'1234' , password:'1234' , user:'redwan'})


{

  /*\
  \\
  const  Getdata=() =>{
  console.log("get")
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(response => {
    console.log("respons",response)
console.log("GETDATA",response.data)  

})
.catch((err)=>{
  console.log("err",err)
});
}


  
  
  */
}

  return (
    <div className="App">
      {/*
<Abut  name="redwan" pothsn="scrept" obj={{age:20,lack:50}}/>
<Abut name="ragb" pothsn="full" obj={{age:30,lack:60}} />
<Abut name="mohmd" pothsn="strac" obj={{age:40,lack:70}}/>
      */}
{
  isLoginPage === true &&
  (
  <>

  <Register userInfo={user}  onClick={()=>{
     setisLoginPage(false)
         }} />
  </>
  )
  
  }{
   isLoginPage === false &&
   (
    <>
    <Login userInfo={user}  onClick={()=>{
      setisLoginPage(true)
     }}/>

    </>
  )
}

</div>

  );
}

export default App;
