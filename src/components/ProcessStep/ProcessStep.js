import React from 'react'
import { Outlet } from 'react-router-dom'

import { Heading } from './styled'

const ProcessStep = () => {
  return (
    <>
      <Heading>Steps</Heading>
      <Outlet />
    </>
  )
}

export default ProcessStep