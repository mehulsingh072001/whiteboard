import React, { useState, useContext } from 'react'
import { Context } from '../Context.js';

function Board() {
  const{ draw } = useContext(Context)

  if(draw[0] === true) {
    return(
      <h1>True</h1>
    )
  }
  return (
    <h1>False</h1>
  )
}

export default Board;
