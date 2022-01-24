import React from 'react'
import { useOutletContext } from 'react-router-dom'

import { useESign } from '~/src/store/esign'

import { PageAction } from '~/src/components/PageAction'

import { Heading, SmallHeading, Block, Display, Number, EditButton, Consent, CheckIcon } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'
import { TextField }from '~/src/styled/Input'

import { InfoLabel } from './styled'

const ESign = () => {
  const setStepComplete = useOutletContext()

  const [esign, setESign] = useESign()

  const { sentOtp, otp, number, valid } = esign

  const sendOtp = async () => {
    setTimeout(() => {
      setESign({ sentOtp: true })
    }, 1000)
  }

  const input = e => {
    const {  value } = e.target
    setESign({ otp: value })
  }

  const verifyOtp = async () => {
    setTimeout(() => {
      setESign({ valid: true })
    }, 1000)
  }

  const complete = () => setStepComplete('esign')

  if (!sentOtp) {
    return (
      <PageAction label='Send OTP' action={sendOtp}>
        <Heading>E-sign</Heading>
        <InfoLabel>Document Name</InfoLabel>
        <SmallHeading>Loan Agreement</SmallHeading>
        <Block success>You are E-signing this document using your Aadhar. To complete E-signing, an OTP wil be sent your mobile number linked to Aadhar.</Block>
        <Block>
          <Display>
            Aadhar number
            <Number>{number}</Number> 
          </Display>
          <EditButton>Edit</EditButton>
        </Block>
        <Consent>I agree to use my aadhar for the purpose of eSign of ducment on BrokenTusk Technology Private Limited's platform and authenitcate my identity using the Aadhar based e-KYC system, in accordance with the Aadar Act, allied regulations and all other applicable laws.</Consent>
        <Consent>I agree to authenticate my identity through OTP, and agree to the use of my photo and demographic details (Name, Gender, Date of Birth andAddress) for the sole purpose of eSign of documents on BrokeTusk Technologies Private Limited's platform.</Consent>
        <Consent>I agree and acknowledge that NSDL eGovernance Instrastructure Limited shall ensure the security and confidentiality of mypersonal identity data shared.</Consent>
      </PageAction>
    )
  }
  if (!valid) {
    return (
      <>
        <Heading>E-sign</Heading>
        <InfoLabel>Document Name</InfoLabel>
        <SmallHeading>Loan Agreement</SmallHeading>
        <SmallHeading>Enter 6 digit OTP</SmallHeading>
        <TextField small type='text' name='otp' value={otp} onChange={input}  />
        <StartButton onClick={verifyOtp}>Verify OTP</StartButton>
      </>
    )
  }
  if (valid) {
    return (
      <>
        <Heading>E-sign</Heading>
        <InfoLabel>Document Name</InfoLabel>
        <SmallHeading>Loan Agreement</SmallHeading>
        <Block success nospace>
          <CheckIcon />
          <Display>Document signed successfully</Display>
        </Block>
        <StartButton onClick={complete}>Complete</StartButton>
      </>
    )
  }
  return (
    <></>
  )
}

export default ESign