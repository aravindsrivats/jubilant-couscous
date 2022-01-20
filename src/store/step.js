import { useCallback, useMemo } from 'react'

import { useStore } from './'

const initialState = [{
  key: 'pan',
  name: 'PAN verification',
  inQueue: false,
  completed: false,
}, {
  key: 'bank',
  name: 'Bank account verification',
  inQueue: false,
  completed: false,
}]

const useSteps = () => {
  const [state, setState] = useStore()
  const { step, pan, bank } = state

  const steps = useMemo(() => {
    const list = [
      ...(pan?.shouldProcess ? ['pan'] : []),
      ...(bank?.shouldProcess ? ['bank'] : []),
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
     
  }, [pan, bank])

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
    [step, setState]
  )

  const resetSteps = () => setState({
    ...state,
    step: initialState,
  })

  return [steps, setStepComplete, resetSteps]
}

export { useSteps, initialState }