import React, {useState, createContext} from 'react';

export const Context = createContext();

export const StateProvider = props => {
  const [draw, setDraw] = useState(false);
  const [erase, setErase] = useState(false);
  const [rect, setRect] = useState(false);
  const [circle, setCircle] = useState(false);
  const [line, setLine] = useState(false);

  return (
    <Context.Provider value={{draw: [draw, setDraw], erase: [erase, setErase], rect: [rect, setRect], circle: [circle, setCircle], line: [line, setLine]}}>
      {props.children}
    </Context.Provider>
  )
}

