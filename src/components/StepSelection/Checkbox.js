import React, { useState } from 'react'

import { CheckboxInput } from '~/src/styled/Input'
import { CheckboxContainer } from './styled'

const Checkbox = ({ step, toggle }) => {
  const { key, name } = step

  const [checked, setChecked] = useState(false)

  const click = () => {
    setChecked(!checked)
    toggle(key, !checked)
  }

  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' name={key} id={key} checked={checked} onChange={click} />
      <label htmlFor={key}>{name}</label>
    </CheckboxContainer>
  )
}

export { Checkbox }