import { useMemo } from 'react'

import { useStore } from './'
import { usePan } from './pan'

const initialState = {
  pan: 'PAN verification',
}

const useSteps = () => {
  const [{ step: list }] = useStore()
  const [pan] = usePan()

  const steps = useMemo(() => {
    return [
      ...(pan?.shouldProcess ? ['pan'] : []),
    ]
     
  }, [pan])

  return [steps, list]
}

export { useSteps, initialState }