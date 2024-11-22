import React from 'react'
import './image.css';
import cat from './cat.jpg';

function ImageManipulation() {
  return (
    <div className='imagecard'>
        <div className='naturediv'>
            <img src={cat} alt="cat image" height={100} width={100} />
        </div>
        <div>
            <button>Enhance Height</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Enhance Width</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Image Rotate</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button>Color Change</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
    </div>
  )
}

export default ImageManipulation