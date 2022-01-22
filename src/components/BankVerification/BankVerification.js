import React, { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { useBank } from '~/src/store/bank'

import { Heading, SmallHeading, Block, Display, Number, EditButton, Consent, CheckIcon } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'

const BankVerification = () => {
  const navigate = useNavigate()
  const setStepComplete = useOutletContext()

  const [bank, setBank] = useBank()

  const { type, accountNumber, ifsc, name } = bank

  useEffect(() => {
    if (!ifsc || !accountNumber) {
      navigate('/', { replace: true })
    }
  }, [ifsc, accountNumber])

  const verifyBank = async () => {
    const response = await fetch('https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/verify/ban', {
      method: 'post',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      }
    })

    const data = await response.json()

    setBank({
      name: data?.data?.name,
      valid: data?.verification === 'success'
    })
  }

  const complete = () => {
    setStepComplete('bank')
  }

  if (type === 'bank' && !name) {
    return (
      <>
        <Heading>Bank account verification</Heading>
        <Block>
          <Display>
            Verification method
            <Number>Verify with bank account information</Number> 
          </Display>
          <EditButton>Edit</EditButton>
        </Block>
        <Block success>
          To verify your bank account, &#8377;1 will be credited to your acount for performing a test transaction.
        </Block>
        <Block vertical>
        <Display gap>
          IFSC
          <Number>{ifsc}</Number>
        </Display>
        <Display gap>
          Account Number
          <Number>{accountNumber}</Number>
        </Display>
      </Block>
        <Consent>I am fully aware that my bank details will be submitted to a bank to perform a transaction to verify the information of the account holder.</Consent>
        <StartButton onClick={verifyBank}>Verify</StartButton>
      </>
    )
  }
  return (
    <>
      <Heading>Bank account verification</Heading>
      <Block success nospace>
        <CheckIcon />
        <Display>
          Your bank account verification is successful
          <Number>&#8377;1 was transferred to your account for completing this verification</Number>
        </Display>
      </Block>
      <SmallHeading>Your bank account details</SmallHeading>
      <Block vertical>
      <Display gap>
          IFSC
          <Number>{ifsc}</Number>
        </Display>
        <Display gap>
          Account Number
          <Number>{accountNumber}</Number>
        </Display>
        <Display gap>
          Account holder name
          <Number>{name}</Number>
        </Display>
      </Block>
      <StartButton onClick={complete}>Next Step</StartButton>
    </>
  )
}

export default BankVerification