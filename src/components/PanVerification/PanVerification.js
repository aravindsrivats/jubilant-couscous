import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { usePan } from '~/src/store/pan'

import { PageAction } from '~/src/components/PageAction'
import { Spinner } from '~/src/components/Spinner'

import { Heading, SmallHeading, Block, Display, Number, EditButton, Consent, CheckIcon } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'

const PanVerification = () => {
  const navigate = useNavigate()
  const setStepComplete = useOutletContext()

  const [loading, setLoading] = useState(false)
  const [pan, setPan] = usePan()

  const { number, name, category, valid } = pan

  useEffect(() => {
    if (!number) {
      navigate('/', { replace: true })
    }
  }, [number])

  const verify = async () => {
    setLoading(true)
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
    setLoading(false)
  }

  const complete = () => {
    setStepComplete('pan')
  }

  if(loading) {
    return <Spinner />
  }

  if (number && !name) {
    return (
      <PageAction label='Verify PAN' action={verify}>
        <Heading>PAN verification</Heading>
        <Block>
          <Display>
            Permanent account number
            <Number>{number}</Number> 
          </Display>
          <EditButton>Edit</EditButton>
        </Block>
        <Consent>I am fully aware that my PAN details will be submitted to NSDL to perform a transaction to verify the information of my PAN Number.</Consent>
      </PageAction>
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
      <StartButton onClick={complete}>Next Step</StartButton>
    </>
  )
}

export default PanVerification