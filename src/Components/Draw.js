import React, { useRef, useEffect, useState, useContext} from 'react';
import '../Styles/Draw.css'
import { Context } from '../Context.js';


const Draw = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false)
  const { erase } = useContext(Context)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext('2d')
    context.scale(2,2)
    context.lineCap="round"
    context.lineWidth = 2
    contextRef.current = context;
  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    contextRef.current.strokeStyle = 'black'
    setIsDrawing(true)

  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){return;}
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  if(erase[0]){
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  return(
    <div>
      <canvas  onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={finishDrawing} ref={canvasRef}/>
    </div>
  )
}

export default Draw;
