import React, { useState } from 'react'

function StudentState() {
    const[count, setCount] = useState(20);

    function doIncrement(){
        setCount(count + 30)
    }

  return (
    <div>StudentState
        <h2>Counter:(count)</h2>
        <div>
            <button id = 'btn' onClick={doIncrement}>Increment</button>
        </div>
        counter:{count}
    </div>
  )
}

export default StudentState