import React from 'react';
import { useState } from 'react';

export default function Content(props){
    const [text, setText]=useState('')
    const [count, setCount]=useState(0)
    const [textStyle, setTextStyle] = useState({})

    let onLoCLick = ()=>{
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Text is Converted to Lower Case","success")
        // console.log("lower case clicked")
    }
    let onUpCLick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text is Converted to Upper Case","success")
        // console.log("Upper case clicked")
    }

    const handleOnchange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text is Copied to Clipboard","success")

    }

    function bold() {
        const boldText = { fontWeight: 'bold' };
        setTextStyle(boldText);
        props.showAlert("Text is Converted to Bold","success")
      }

      function italic() {
        const italicText = { fontStyle: 'italic' };
        setTextStyle(italicText);
        props.showAlert("Text is Converted to LItalic","success")
      }

    return (
        <>
        <div className={`text-${props.mode==='light'?'dark':'light'} container mt-3`}>
            <h2>Enter Your Text Here....</h2>
    <textarea className="form-control" style={textStyle} onChange={handleOnchange} value={text}  id="text" rows="8"></textarea>
    <button onClick={onUpCLick}  className="btn btn-primary mx-2 my-2" >Capital</button>
    <button onClick={onLoCLick} className="btn btn-primary mx-2 my-2" >Small</button>
    <button onClick={bold} className="btn btn-primary mx-2 my-2" >Bold</button>
    <button onClick={italic} className="btn btn-primary mx-2 my-2" >italic</button>
    <button onClick={handleCopy} className="btn btn-primary mx-2 my-2" >Copy Text</button>
    </div>
    <div className={` text-${props.mode==='light'?'dark':'light'} my-3 container`}>

    <h3>Your Text Summary</h3>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
    <h4>Enter Text above to preview</h4>
    <p style={textStyle}>{"> "}{text}</p>
    
    {/* <p>{count}</p> */}
    </div>
    </>
    )
}