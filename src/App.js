import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState,useEffect } from 'react';
import './App.css';
import Register from './Componet/Register';
import Login from './Componet/Login';
import {  Route ,Routes } from 'react-router-dom';
import Api from "./Componet/Api"
import Romantic from "./Componet/Romantic";
import Drama from "./Componet/Drama"
import Comedy from "./Componet/Comedy"
import Action  from "./Componet/Action";
import Head from "./Componet/head";
import Vid from "./Componet/Vid";

const vid = function changevid(buttonlink) { 
    document.getElementById('change').src = buttonlink ;
    console.log("run")
}
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

const [ isLoginPage,setisLoginPage]=useState(true)
const [user, setuser] = useState({email:'1234' , password:'1234' , user:'redwan'})





  return (
    <div className="App">

      <Routes>
        <Route path='/' element = {<Register userInfo={user}  />}/>
        <Route path='/Login' element={  <Login userInfo={user} /> }/>
        <Route  path='/Api' element={  <Api/>}/>
        <Route  path='/Romantic' element={  <Romantic/>}/>
        <Route  path='/Drama' element={  <Drama vid={vid}/>}/>
        <Route  path='/vid' element={  <Vid vid={vid}><Drama /></Vid>}/>
        <Route  path='/Comedy' element={  <Comedy/>}/>
        <Route  path='/Action' element={  <Action/>}/>
        <Route  path='/Hider' element={  <Head/>}/>

      </Routes>

      {/*
<Abut  name="redwan" pothsn="scrept" obj={{age:20,lack:50}}/>
<Abut name="ragb" pothsn="full" obj={{age:30,lack:60}} />
<Abut name="mohmd" pothsn="strac" obj={{age:40,lack:70}}/>
      */}

</div>
  );
}

export default App;
