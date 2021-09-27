import React,{useState} from 'react'

export default function TextForm(props) {
    // function handelUpClick() {
    //     console.log("uppercase case")
    // }
    const handelUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","Success");
    }
    const handelLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
           props.showAlert("Converted to lowercase","Success");
    }
    const handleClearClick = ()=> {
        setText("");
        props.showAlert("all clear","Success");
    }
    const [myStyle, setMyStyle] = useState({});

    const handleItalicClick = ()=> {
    setMyStyle({
        fontStyle: 'italic'
    })
    props.showAlert("Converted to Italic","Success");
    }
    const handleBoldClick= ()=>{
        setMyStyle({
            fontWeight: 'bold'
        })
        props.showAlert("Converted to bold","Success");
    }

    const handleOnChange = (event)=> {
        // console.log("onchage");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    let textBoxStyles = Object.assign({}, 
        myStyle,
        {backgroundColor: props.mode==='dark'?'gray':'#cddaee', color: props.mode==='dark'?'white':'black'}
        );
    return ( 
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={textBoxStyles} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleItalicClick}>Convert to Italic</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleBoldClick}>Convert to Bold</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>your text sammery</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length - 0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
