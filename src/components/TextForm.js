import React, { useState } from 'react'

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  //   const handleCaseClick = () => {
  //     if(initial==='UpperCase'){
  //       let newText = text.toUpperCase();
  //       setText(newText);
  //       updated("LowerCase");
  //     }
  //     else{
  //     let newText = text.toLowerCase();
  //     setText(newText);
  //     updated("UpperCase");
  //   }
  // }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
   props.showAlert("success" , "converted to lowercase");

  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success" , "converted to UPPERCASE");
  }
  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
    props.showAlert("success" , "cleared successfully!");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success" , "yaayy extra spaces are gone");
  }
  const handleCopy = () => {
    let text = document.getElementById('box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success" , "copied to clipboard successfully!");
  }
  const [text, setText] = useState('enter the text');
  // const [initial, updated] = useState('UpperCase');


  return (
    <div>
      <div className="container" >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="box" style={{ backgroundColor: props.mode === 'light'?'white' : '#d8c8c8' }} rows="6" value={text} onChange={handleOnChange}  ></textarea>
          {/* <button className="btn btn-primary my-3 mx-1" onClick={handleCaseClick}>{initial}</button> */}

          <div className="btn-group my-3 mx-1">
            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              case
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={handleLoClick}>lowercase</a></li>
              <li><a className="dropdown-item" onClick={handleUpClick}>UpperCase</a></li>
            </ul>
          </div>
          <button className="btn btn-danger my-3 mx-1" onClick={handleClearClick}>clear</button>
          <button className="btn btn-success my-3 mx-1" onClick={handleExtraSpaces}>removeExtraSpaces</button>
          <button className="btn btn-warning my-3 mx-1" onClick={handleCopy}>copy</button>
        </div>
        <div className="container">
          <h3>Your text summary</h3>
          <hr />
          <p>
            {text.split(" ").length - 1} words and {text.length} characters</p>
          <p> {text.length>0?0.008 * text.split(" ").length: 0} Minutes read</p>
          <h5> <b>Preview</b> </h5>
          <hr />
          <p>{text.length > 0 ? text : "please write something on above textArea to see its preview"}
          </p>
        </div>
      </div>
    </div>
  );
}
