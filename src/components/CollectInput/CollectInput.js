import React from 'react'

import { PanInput } from '~/src/components/Pan'

import ETMoneyLogo from '~/src/assets/etmoney.png'
import SetuLogo from '~/src/assets/setu.png'

import { useSteps } from '~/src/store/input'

import { Header, Logo, Image, Heading, Body } from './styled'

const CollectInput = () => {
  const inputs = {
    pan: () => <PanInput key='pan' />
  }

  const [steps] = useSteps()

  return (
    <>
      <Header>
        <Logo><Image src={ETMoneyLogo} height='30px' /></Logo>
        <Logo>Powered By <Image src={SetuLogo} height='20px' /></Logo>
      </Header>
      <Heading>Data Gateway</Heading>
      <Body>Please provide these details to begin the verification</Body>
      {steps.map(step => inputs[step]())}
    </>
  )
}

export default CollectInput