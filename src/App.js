import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
const[mode , setMode] = useState('light');
const[alert , setAlert] = useState(null);
const showAlert=( type,message)=>{
  setAlert({
    msg : message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
const clickme=()=>{
  if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("success" , "light mode successfully enabled");
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor = 'rgb(4, 39, 67)';  
    document.body.style.color = 'white';
    showAlert("success" , "dark mode successfully enabled");
  }
}
const RedClick = ()=>{
  setMode('danger');
  document.body.style.backgroundColor = 'rgb(255 159 181)';
  document.body.style.color = 'darkred';
  showAlert("success" , "reddish mode successfully enabled");

}
const greenClick = ()=>{
  setMode('success');
  document.body.style.backgroundColor = 'rgb(167 222 167)';
  document.body.style.color = 'darkgreen';
  showAlert("success" , "greenish mode successfully enabled");

}
const blueClick = ()=>{
  setMode('primary');
  document.body.style.backgroundColor = '#cbe1ea';
  document.body.style.color = 'darkblue';
  showAlert("success" , "bluish mode successfully enabled");

}
  return ( 
  // <Router>
  <div>
     <Navbar name="TextUtilis"  mode = {mode} clickme={clickme} RedClick ={RedClick} greenClick={greenClick} blueClick = {blueClick}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm  heading = "Enter the text to analyaze" mode = {mode} showAlert={showAlert}  />
          {/* </Route>
        </Switch> */}
       {/* </Router>  */}
     </div>
     </div>
     
  );
}


export default App;
