import React, {useState, createContext} from 'react';

export const Context = createContext();

export const StateProvider = props => {
  const [draw, setDraw] = useState(false);
  const [erase, setErase] = useState(false);
  const [shape, setShape] = useState(false);

  return (
    <Context.Provider value={{draw: [draw, setDraw], erase: [erase, setErase], shape: [shape, setShape]}}>
      {props.children}
    </Context.Provider>
  )
}

