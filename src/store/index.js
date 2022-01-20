import React, { createContext, useContext, useMemo, useState } from 'react'

const context = createContext()

const Provider = ({ children, initial = {} }) => {
  const [state, setState] = useState(initial)

  const value = useMemo(() => [state, setState], [state])

  return <context.Provider value={value}>{children}</context.Provider>
}

const useStore = () => useContext(context)

export * from './initialState'
export { Provider, useStore }