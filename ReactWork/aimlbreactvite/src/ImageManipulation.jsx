import React from 'react'
import './image.css';
import cat from './cat.jpg';

function ImageManipulation() {
  const[height,setHeight]=useState(100)
  const[red,setRed]=useState();
  const[green,setGreen]=useState();
  const[blue,setBlue]=useState();
  const[imgrotate,setImgRotate]=useState();
  
  function enhanceheight(){
    setHeight(height+20);
  }
  
  function changeColor(){
  setRed(Math.random()*255);
  setGreen(Math.random()*255);
  setBlue(Math.random()*255);
  }
  
  
  function imageRotate(){
    alert("hiiii");
  };
  
  return (
    <div className='imageCard'>
      <div className='catdiv' style={{backgroundColor:RGB(${red},${green},${blue})}}>
        <img src={cat} height={height} width={100} alt='cat Image' />
      </div>
      <div className='buttondiv'>
        <button onClick={enhanceheight}  style={{backgroundColor:'orange'}} >Enhance Height</button>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <button >Enhance Width</button>
        <br></br>
        &nbsp;
        <button onClick={imageRotate} >Image Rotate</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={changeColor} >Color Change</button>
      </div>  
    </div>
  );
};
  
export default ImageManipulation;