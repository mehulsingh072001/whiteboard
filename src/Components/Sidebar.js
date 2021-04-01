import React, {useState, useContext, useRef } from 'react';
import { Context } from '../Context.js';
import '../Styles/Sidebar.css'

function Sidebar() {
  const { draw, erase } = useContext(Context)

  const dT = () => {
    draw[1](!draw[0])
  }

  const eT = () => {
    erase[1](true)
  }

  const eT2 = () => {
    erase[1](false)
  }

  return(
    <div className="sidebar">
      <nav>
        <div id="hamburger"><i className="fas fa-bars"></i></div>
          <i className="fas fa-pencil-alt" onClick={dT}></i>
          <i className="fas fa-eraser" onMouseDown={eT} onMouseUp={eT2}></i>
          <i className="fas fa-palette"></i>
          <i className="fas fa-shapes"></i>
      </nav>
    </div>
  )
}

export default Sidebar
