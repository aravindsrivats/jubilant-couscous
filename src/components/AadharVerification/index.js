import { lazy } from 'react'

const AadharInput = lazy(() => import('./AadharInput'))
const AadharVerification = lazy(() => import('./AadharVerification'))

export { AadharInput, AadharVerification }