import React,{useState} from 'react'

export default function Textform(props) {
const [text,setText]=useState('Enter the text');
const upperCase=()=>{
    let newText = text.toUpperCase();
    setText(newText)
   props.showAlert('Converted to Upper Case','success');
}
const changeValue=(event)=>{
    setText(event.target.value)
}
const loCase=()=>{
    let newText = text.toLowerCase();
    setText(newText)
   props.showAlert('Converted to Lower Case','success');

}
const clCase=()=>{
    let newText ='';
    setText(newText)
   props.showAlert('Text Cleared','success');

}
const resCase=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(' '))
   props.showAlert('Spaces removed','success');

}
const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black',
height:'300px'

})
const modeChange=()=>{
if(myStyle.color=== 'white')
    setMyStyle({
color:'black',
backgroundColor:'white',
height:'300px'
})
else{
    setMyStyle({
        color:'white',
        backgroundColor:'black',
height:'300px'

        })
}
}

  return (
    <>
    <div className='container my-3'>
      <div class="form-floating">
        <h1>{props.title}</h1>
  <textarea class="form-control"style={myStyle} onChange={changeValue}rows={'3'} value={text} id="floatingTextarea"></textarea>
</div>
<button disabled={text.length===0} className='btn bg-primary my-3' onClick={upperCase}>Convert to Upper Case</button>
<button disabled={text.length===0}className='btn bg-primary my-3 mx-3' onClick={loCase}>Convert to Lower Case</button>
<button disabled={text.length===0}className='btn bg-primary my-3 mx-3' onClick={clCase}>Clear</button>
<button disabled={text.length===0}className='btn bg-primary my-3 mx-3' onClick={resCase}>Remove Spaces</button>
<button disabled={text.length===0}className='btn bg-primary my-3 mx-3' onClick={modeChange}>Change Mode</button>
</div>
<div className="container">
  <h1>Text Counter</h1>
  <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words {text.length} chracter</p>
  <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}Minutes</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
