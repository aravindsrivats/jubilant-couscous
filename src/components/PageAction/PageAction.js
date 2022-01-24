import React, { useState } from 'react'

import { Wrapper, Children, Shadow } from './styled'
import { Checkbox } from '~/src/components/StepSelection/Checkbox'
import { StartButton } from '~/src/styled/Button'

const PageAction = ({ children, label, action }) => {
  const [terms, setTerms] = useState(false)
  const [error, setError] = useState(false)

  const toggle = (_, value) => {
    setTerms(value)
  }

  const triggerAction = () => {
    if (!terms) {
      return setError(true)
    }
    action()
  }

  return (
    <Wrapper>
      <Children>
        {children}
      </Children>
      <Shadow />
      <Checkbox error={error} id='terms' label='I have read and understood all of  the above points.' checked={terms} toggle={toggle} />
      <StartButton onClick={triggerAction}>{label}</StartButton>
    </Wrapper>
  )
}

export default PageAction