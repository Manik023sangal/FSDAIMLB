import React from 'react'
import Student from './Student';
import logo from './st.png';

function App() {


  const studentdata = {
    college: "ABES Engineering College",
    pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    Roll: "2200326788",
    name: "Manik Sangal",
    branch: "CSE AIML",
    section: "B",
  }
  // let a = 20;
  // let myStyle = {
  //   backgroundColor:'aqua',
  //   color:'black',
  //   border:'10px solid black',
  //   height:'100px', 
  // }

  return (
    <div style={{marginLeft:"300px"}}>
      <Student data = {studentdata} />
      <h2>ABES ENGINEERING COLLEGE</h2>
      <div style={myStyle}>{a}</div> 

      <Student 
      pic = {<img src = {logo} height={100} width={100}></img>}
      college = "ABES Engineering College" rollno = "22003528834" name = "Manik Sangal" branch = "CSE AIML" section = "B"/>
      <Student 
      pic = {<img src = {logo} height={100} width={100}></img>}
      college = "ABES Engineering College" rollno = "22003528835" name = "Nigam Kumar" branch = "CSE AIML" section = "B"/>
      <Student 
      pic = {<img src = {logo} height={100} width={100}></img>}
      college = "ABES Engineering College" rollno = "22003528836" name = "Prince Kumar" branch = "CSE AIML" section = "B"/>
    </div>
  )
}

export default App;