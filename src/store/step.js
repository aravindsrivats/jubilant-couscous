import { useCallback, useMemo } from 'react'

import { useStore } from './'
import { usePan } from './pan'

const initialState = [
  {
    key: 'pan',
    name: 'PAN verification',
    inQueue: false,
    completed: false,
  },
]

const useSteps = () => {
  const [state, setState] = useStore()
  const { step } = state
  const [pan] = usePan()

  const steps = useMemo(() => {
    const list = [
      ...(pan?.shouldProcess ? ['pan'] : []),
    ]
    return step.map(item => {
      if (list.includes(item.key)) {
        return {
          ...item,
          inQueue: true,
        }
      }
      return item
    }).filter(item => item.inQueue)
     
  }, [pan])

  const setStepComplete = useCallback(
    key =>
      setState({ 
        ...state,
        step: step.map(item => {
          if (item.key === key) {
            return {
              ...item,
              completed: true,
            }
          }
          return item
        }),
      }),
    [setState],
  )

  const resetSteps = () => setState({
    ...state,
    step: initialState,
  })

  return [steps, setStepComplete, resetSteps]
}

export { useSteps, initialState }