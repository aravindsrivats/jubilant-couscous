import React from 'react'
import { Outlet } from 'react-router-dom'

import { Heading } from '~/src/styled/PageElements'

const ProcessStep = () => {
  return (
    <>
      <Heading>Steps</Heading>
      <Outlet />
    </>
  )
}

export default ProcessStep