import React, { useState } from 'react'

const Checkbox = ({ step, toggle }) => {
  const { key, name } = step

  const [checked, setChecked] = useState(false)

  const click = () => {
    setChecked(!checked)
    toggle(key, !checked)
  }

  return (
    <div>
      <input type='checkbox' name={key} checked={checked} onChange={click} />
      <label htmlFor={key}>{name}</label>
    </div>
  )
}

export { Checkbox }