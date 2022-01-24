import React from 'react'

import { Wrapper, Children, Shadow } from './styled'
import { StartButton } from '~/src/styled/Button'

const PageAction = ({ children, label, action }) => {
  return (
    <Wrapper>
      <Children>
        {children}
      </Children>
      <Shadow />
      <StartButton onClick={action}>{label}</StartButton>
    </Wrapper>
  )
}

export default PageAction