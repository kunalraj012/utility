import React, {useState} from 'react'


export default function TextForm(props) {
    const handleupClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearup = () => {
        let newText ='';
        setText(newText)
    }
    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopyClick = () => {
        console.log("I am Copy");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

  const [text, setText] = useState("");
  
  // text = "new text"; // Wrong way to change the state
  // setText ("new text"); // Correct way to change the state

  return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-info mx-2 px-5" onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-info mx-2 px-5" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-info mx-2 px-5" onClick={handleClearup}>Clear</button>
            <button className="btn btn-info mx-2 px-5" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split (" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008 * text.split (" ").length} <b>Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
