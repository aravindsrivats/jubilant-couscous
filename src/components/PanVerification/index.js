import { lazy } from 'react'

const PanInput = lazy(() => import('./PanInput'))
const PanVerification = lazy(() => import('./PanVerification'))

export { PanInput, PanVerification }