import React, {useState, useContext } from 'react';
import '../Styles/Sidebar.css'
import { Context } from '../Context.js';

function Sidebar() {
  const { draw, erase } = useContext(Context)

  const dT = () => {
    draw[1](!draw[0])
  }

  const eT = () => {
    erase[1](!erase[0])
  }
  return(
    <div className="sidebar">
      <nav>
        <div id="hamburger"><i className="fas fa-bars"></i></div>
          <i className="fas fa-pencil-alt" onClick={dT}></i>
          <i className="fas fa-eraser" onClick={eT}></i>
          <i className="fas fa-palette"></i>
          <i className="fas fa-shapes"></i>
      </nav>
    </div>
  )
}

export default Sidebar
