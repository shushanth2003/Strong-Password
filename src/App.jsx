import { useState } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [includeupper,setIncludeupper]=useState(true);
  const [includelower,setIncludelower]=useState(true);
  const [includenumber,setIncludenumber]=useState(true);
  const [includesymbols,setIncludesymbols]=useState(true);
  const [password,setPassword]=useState();
  const generate_btn=()=>{
      let charset="";
      if(includeupper){
        charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if(includelower){
        charset+="abcdefghijklmnopqrstuvwxyz";
      }
      if(includenumber){
        charset+="0123456789"
      }
      if(includesymbols){
        charset+="!@#$%^&*()_+-=[]{}|;:'\",.<>/?"
      }
      let generatepassword="";
      for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*charset.length);
        generatepassword+=charset[randomindex];
      }
      setPassword(generatepassword);
  }
  const copyclipboard=()=>{
    navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="maincontainer">
  <h1>Strong Password Generator</h1>
  <div className="password-length">
    <label htmlFor="pass-length">Password Length</label>
    <input type="number" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
  </div>
  <div className="include-case">
    <div>
      <input type="checkbox" id="includeupper" checked={includeupper} onChange={(e)=>{setIncludeupper(e.target.checked)}}/> 
      <label htmlFor="includeupper">Include Uppercase</label>
    </div>
    <div>
      <input type="checkbox" id="includelower" checked={includelower} onChange={(e)=>{setIncludelower(e.target.checked)}}/> 
      <label htmlFor="includelower">Include Lowercase</label>
    </div>
    <div>
      <input type="checkbox" id="includenumber"  checked={includenumber} onChange={(e)=>{setIncludenumber(e.target.checked)}}/> 
      <label htmlFor="includenumber">Include Number</label>
    </div>
    <div>
      <input type="checkbox" id="includesymbols"  checked={includesymbols} onChange={(e)=>{setIncludesymbols(e.target.checked)}}/> 
      <label htmlFor="includesymbols">Include Symbols</label>
    </div>
  </div>
  <button id="generate-btn" onClick={generate_btn}>Generate Password</button>
  <div className="password-output">
    <input readOnly value={password}/ >
    <button onClick={copyclipboard}>Copy</button>
  </div>
</div>

    </>
  )
}

export default App
