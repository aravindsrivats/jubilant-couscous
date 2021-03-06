import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { useAadhar } from '~/src/store/aadhar'

import { PageAction } from '~/src/components/PageAction'
import { Spinner } from '~/src/components/Spinner'

import { Heading, SmallHeading, Block, Display, Number, EditButton, CheckIcon } from '~/src/styled/PageElements'
import { StartButton, TextLink } from '~/src/styled/Button'
import { TextField }from '~/src/styled/Input'
import { InfoLabel, Highlight, Captcha, PlaceHolder } from './styled'

import { formatAadhar } from './util'

const AadharVerification = () => {
  const navigate = useNavigate()
  const setStepComplete = useOutletContext()

  const [loading, setLoading] = useState(false)
  const [aadhar, setAadhar] = useAadhar()

  const { requestId, number, captcha, captchaImage, captchaerror, sentOtp, otp, otperror, shareCode, shareCodeerror, valid } = aadhar

  useEffect(() => {
    if (!number) {
      navigate('/', { replace: true })
    }
  }, [number])

  useEffect(async () => {
    if (sentOtp) {
      return
    }
    setLoading(true)
    let response = await fetch('https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/okyc/', {
      method: 'post',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      }
    })

    const { id } = await response.json()

    response = await fetch(`https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/okyc/${id}/initiate`, {
      method: 'get',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      }
    })

    const { captchaImage } = await response.json()

    setAadhar({ requestId: id, captchaImage })
    setLoading(false)
  }, [sentOtp])

  const input = e => {
    const { name, value } = e.target
    setAadhar({ [name]: value })
  }

  const sendOtp = async () => {
    if (captcha === '') {
      return setAadhar({ captchaerror: true })
    }
    setLoading(true)
    const response = await fetch(`https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/okyc/${requestId}/verify`, {
      method: 'post',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      },
      body: JSON.stringify({
        aadhaarNumber: number,
        captchaCode: captcha,
      })
    })

    const data = await response.json()

    setAadhar({ sentOtp: true })
    setLoading(false)
  }

  const verifyOtp = async () => {
    let error = false
    if (otp === '' || otp.length < 6) {
      error = { ...error, otperror: true }
    }
    if (shareCode === '' || shareCode.length < 4) {
      error = { ...error, shareCodeerror: true }
    }
    if (error) {
      return setAadhar(error)
    }
    setLoading(true)
    const response = await fetch(`https://2ddcdcfb-1be8-4a36-a12c-65e706d38e7f.mock.pstmn.io/api/okyc/${requestId}/complete`, {
      method: 'post',
      headers: {
        'x-client-id': 'test-client',
        'x-client-secret': '891707ee-d6cd-4744-a28d-058829e30f12',
      },
      body: JSON.stringify({
        otp,
        shareCode,
      })
    })

    const data = await response.json()

    setAadhar({ valid: !!data?.id })
    setLoading(false)
  }

  const complete = () => {
    setStepComplete('aadhar')
  }

  const focus = e => {
    const { name } = e.target
    setAadhar({ [`${name}error`]: false })
  }

  const click = e => {
    e.target.click()
  }

  if(loading) {
    return <Spinner />
  }

  if (!sentOtp) {
    return (
      <PageAction label='Send OTP' action={sendOtp}>
        <Heading>Offline Aadhar verification (OKYC)</Heading>
        <Block>
          <Display>
            Aadhar number
            <Number>{formatAadhar(number)}</Number> 
          </Display>
          <EditButton>Edit</EditButton>
        </Block>
        <SmallHeading>Enter security code</SmallHeading>
        <InfoLabel>Type the characters you see in the picture</InfoLabel>
        {
          captchaImage
            ? <Captcha src={`data:image/png;charset=utf-8;base64,${captchaImage}`} alt='captcha' onLoad={click} />
            : <PlaceHolder />
        }
        <TextField type='text' name='captcha' value={captcha} onChange={input} maxLength='5' error={captchaerror} onFocus={focus} />
        <Block success>We will send you an OTP to the mobile number linked with your Aadhar</Block>
      </PageAction>
    )
  }
  if (!valid) {
    return (
      <>
        <Heading>Offline Aadhar verification (OKYC)</Heading>
        <SmallHeading>Enter 6 digit OTP</SmallHeading>
        <TextField small type='text' name='otp' value={otp} onChange={input} maxLength='6' error={otperror} onFocus={focus}  />
        <TextLink onClick={sendOtp}>Resend OTP</TextLink>
        <SmallHeading>Create a share code</SmallHeading>
        <InfoLabel>
          <Highlight>Please entera 4 digit number. You need not remember this code.</Highlight><br />
          Your Aadhar  data will be locked with this code and only PartnerName can access your data.
        </InfoLabel>
        <TextField small type='text' name='shareCode' value={shareCode} onChange={input} maxLength='4' error={shareCodeerror} onFocus={focus} />
        <StartButton onClick={verifyOtp}>Verify OTP</StartButton>
      </>
    )
  }
  if (valid) {
    return (
      <>
        <Heading>Offline Aadhar verification (OKYC)</Heading>
        <Block success nospace>
          <CheckIcon />
          <Display>Your Aadhar verification is<br />successful</Display>
        </Block>
        <StartButton onClick={complete}>Next Step</StartButton>
      </>
    )
  }
  return (
    <></>
  )
}

export default AadharVerification