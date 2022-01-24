import React from 'react'

import { useBank } from '~/src/store/bank'

import { PageAction } from '~/src/components/PageAction'

import { Heading, SmallHeading, Block, Display, Number, EditButton, Consent, CheckIcon } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'

const UPIVerification = ({ complete }) => {
  const [bank, setBank] = useBank()

  const { accountNumber, ifsc, name, valid } = bank

  const deepLink = `upi://pay?pa=hari.srivats@okicici&pn=Aravind&am=1&cu=INR`

  const startTimer = () => {
    window.location = deepLink
    setTimeout(verifyUpi, 5000)
  }

  const verifyUpi = async () => {
    setBank({
      name: 'John Taylor',
      valid: true,
    })
  }

  if (!valid) {
    return (
      <PageAction label='Open UPI App' action={startTimer}>
        <Heading>Bank account verification</Heading>
        <Block>
          <Display>
            Verification method
            <Number>Verify with UPI</Number> 
          </Display>
          <EditButton>Edit</EditButton>
        </Block>
        <Block vertical success>
          To verify your bank account, please complete a test payment of &#8377;1 on your UPI app. Theamount will be refunded after verification.<br /><br />
          <Display>Please choose an UPI app that is linked to the bank account you want to verify.</Display>
        </Block>
        <Consent>UPI Consent message</Consent>
      </PageAction>
    )
  }
  return (
    <>
      <Heading>Bank account verification</Heading>
      <Block success nospace>
        <CheckIcon />
        <Display>
          Your bank account verification is successful
          <Number>&#8377;1 was debited from your account for completing this verification. It will be refunded within 1 hour.</Number>
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

export default UPIVerification