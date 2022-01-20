import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePan } from '~/src/store/pan'

import { Heading, Block, Display, Number, EditButton, Consent, StartButton } from './styled'

const Pan = () => {
  const navigate = useNavigate()

  const [{ number }] = usePan()

  useEffect(() => {
    if (!number) {
      navigate('/', { replace: true })
    }
  }, [number])

  return (
    <>
      <Heading>PAN verification</Heading>
      <Block>
        <Display>
          Permanent account number
          <Number>{number}</Number> 
        </Display>
        <EditButton>Edit</EditButton>
      </Block>
      <Consent>I am fully aware that my PAN details will be submitted to NSDL to perform a transaction to verify the informationof my PAN Number.</Consent>
      <StartButton>Verify PAN</StartButton>
    </>
  )
}

export default Pan