import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import { useBank } from '~/src/store/bank'

import UPIVerification from './UPI'
import AccountVerification from './Account'


const BankVerification = () => {
  const setStepComplete = useOutletContext()

  const [bank] = useBank()

  const { type } = bank

  const complete = () => setStepComplete('bank')

  return type === 'upi'
    ? <UPIVerification complete={complete} />
    : <AccountVerification complete={complete} />

}

export default BankVerification