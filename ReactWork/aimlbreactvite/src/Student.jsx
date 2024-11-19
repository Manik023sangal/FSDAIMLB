import React from 'react'
import './studentstyle.css'

function Student(data) {
  return (
    <div className='icard'>
        <h2>Hi, {data.name}
            <br/>
            Your branch is: {data.branch}
        </h2>
        {/* JSON.stringify(data) */}

        <table>
            <tbody>
                <tr><td colSpan={2}>{data.college}</td></tr>
                <tr><td colSpan={2}><img src={data.pic} height={100} width={100} alt='student pic'></img></td></tr>
                <tr><td>RollNo.</td><td>{data.rollno}</td></tr>
                <tr><td>Name:</td><td>{data.name}</td></tr>
                <tr><td>Branch:</td>{data.branch}</tr>
                <tr><td>Section:</td><td>{data.section}</td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default Student;