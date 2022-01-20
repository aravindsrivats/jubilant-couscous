import { useMemo } from 'react'

import { usePan } from './pan'

const useSteps = () => {
  const [pan] = usePan()

  const steps = useMemo(() => {
    return [
      ...(pan?.shouldProcess ? ['pan'] : []),
    ]
     
  }, [pan])

  return [steps]
}

export { useSteps }