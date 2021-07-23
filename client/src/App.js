import React,{useState,useEffect} from "react"
import {Route} from 'react-router-dom'
import axios from 'axios'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/layouts/Home";

import Thankyou from "./components/Thankyou"



function App() {
  const [posts,setposts]=useState([]);
  const [posts2,setposts2]=useState([]);
  useEffect(()=>{
    axios.get("/faculties")
    .then(res => setposts(res.data))
    .catch(error=>console.log(error));
  })
  useEffect(()=>{
    axios.get("/publications")
    .then(res => setposts2(res.data))
    .catch(error=>console.log(error));
  })
  return (
    <div className="App">
     
     
     <Route exact path="/">
      <Home/>
    </Route>
    <Route  path="/thankyou" component={Thankyou}/>
     
    </div>
  );
}

export default App;
