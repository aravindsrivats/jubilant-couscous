import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePan } from '~/src/store/pan'

import { Heading, SmallHeading } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'
import { Block, Display, Number, EditButton, Consent, CheckIcon } from './styled'

const Pan = () => {
  const navigate = useNavigate()

  const [pan, setPan] = usePan()

  const { number, name, category, valid } = pan

  useEffect(() => {
    if (!number) {
      navigate('/', { replace: true })
    }
  }, [number])

  const verify = async () => {
    const response = await fetch('https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/verify/pan', {
      method: 'post',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      }
    })

    const data = await response.json()

    setPan({
      name: data?.data?.full_name,
      category: data?.data?.category,
      valid: data?.verification === 'success'
    })
  }

  if (number && !name) {
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
        <Consent>I am fully aware that my PAN details will be submitted to NSDL to perform a transaction to verify the information of my PAN Number.</Consent>
        <StartButton onClick={verify}>Verify PAN</StartButton>
      </>
    )
  }
  return (
    <>
      <Heading>PAN verification</Heading>
      <Block success nospace>
        <CheckIcon />
        <Display>Your PAN verification is<br />successful</Display>
      </Block>
      <SmallHeading>Your PAN details</SmallHeading>
      <Block vertical>
        <Display gap>
          Permanent account number
          <Number>{number}</Number>
        </Display>
        <Display gap>
          Name
          <Number>{name}</Number>
        </Display>
        <Display gap>
          Category
          <Number>{category}</Number>
        </Display>
        <Display gap>
          PAN Status
          <Number>{valid && 'Valid'}</Number>
        </Display>
      </Block>
      <StartButton>Next Step</StartButton>
    </>
  )
}

export default Pan