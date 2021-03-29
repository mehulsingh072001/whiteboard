import React, { useState, useContext } from 'react'
import { Context } from '../Context.js';
import Draw from './Draw'
import Erase from './Eraser'


function Board() {
  const{ draw } = useContext(Context)

    if(draw[0] === true) {
      return(
        <Draw/>
      )
    }
    return(
      <div>
        <Erase/>
      </div>
    )
}

export default Board;
