import React, {useState, useContext, useRef } from 'react';
import { Context } from '../Context.js';
import '../Styles/Sidebar.css'

function Sidebar() {
  const { draw, erase, line, rect, circle } = useContext(Context)

  const dT = () => {
    draw[1](!draw[0])
  }

  const eT = () => {
    erase[1](!erase[0])
  }

  const lT = () => {
    line[1](!line[0])
  }

  const rT = () => {
    rect[1](!rect[0])
  }

  const cT = () => {
    circle[1](!circle[0])
  }

  return(
    <div className="sidebar">
      <nav>
          <i className="fas fa-pencil-alt" onClick={dT}></i>
          <i className="fas fa-eraser" onMouseDown={eT} onMouseUp={eT}></i>
          <span className="line" onClick={lT}></span>
          <i id="circle" class="far fa-circle"></i>
          <span className="rect" onClick={lT}></span>
      </nav>
    </div>
  )
}

export default Sidebar
