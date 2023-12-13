import React, {useState} from 'react'


export default function TextForm(props) {
    const handleupClick = ()=> {
        console.log("Uppercase was clicked");
        setText("You have clicked on handleUpClick")
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
  const [text, setText] = useState('Enter text here');
  
  // text = "new text"; // Wrong way to change the state
  // setText ("new text"); // Correct way to change the state

  return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupClick}>Convert to Uppercase</button>
        </div>
  )
}
