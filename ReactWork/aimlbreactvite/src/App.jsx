import React from 'react'

function App() {
  let a = 20;
  let myStyle = {
    backgroundColor:'aqua',
    color:'black',
    border:'10px solid black',
    height:'100px', 
  }

  return (
    <div style={{color: 'red'}}>
      <h2>ABES ENGINEERING COLLEGE</h2>
      <div style={myStyle}>{a}</div>
    </div>
  )
}

export default App