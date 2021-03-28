import React, { useState, useContext } from 'react'
import { Context } from '../Context.js';

const Erase = () => {
  const{ erase } = useContext(Context)

  if(erase[0] === true) {
    return(
      <h1>True</h1>
    )
  }
  return (
    <h1>False</h1>
  )
}

export default Erase;
