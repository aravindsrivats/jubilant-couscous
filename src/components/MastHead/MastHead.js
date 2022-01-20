import React from 'react'

import ETMoneyLogo from '~/src/assets/etmoney.png'
import SetuLogo from '~/src/assets/setu.png'

import { Header, Logo, Image } from './styled'

const MastHead = () => (
  <>
    <Header>
      <Logo><Image src={ETMoneyLogo} height='30px' /></Logo>
      <Logo>Powered By <Image src={SetuLogo} height='20px' /></Logo>
    </Header>
  </>
)

export default MastHead