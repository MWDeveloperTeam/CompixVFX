import React, { useState } from 'react'
import { createContext } from "react";
import Menu from './Components/Menu/Menu';

export const Store = createContext()


const StoreFile = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
      <Store.Provider value={{toggle, setToggle}}>
          <Menu/>
      </Store.Provider>
    </div>
  )
}

export default StoreFile
