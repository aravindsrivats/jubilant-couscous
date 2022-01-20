import { lazy } from 'react'

const BankInput = lazy(() => import('./BankInput'))
const BankVerification = lazy(() => import('./BankVerification'))

export { BankInput, BankVerification }