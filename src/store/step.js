import { useCallback, useMemo } from 'react'

import { useStore } from './'

const initialState = [{
  key: 'pan',
  name: 'PAN verification',
  tag: 'PAN verification',
  inQueue: false,
  completed: false,
}, {
  key: 'bank',
  name: 'Bank account verification',
  tag: 'PAN verification',
  inQueue: false,
  completed: false,
}, {
  key: 'aadhar',
  name: 'Offline Aadhar Verification (OKYC)',
  tag: 'OKYC',
  inQueue: false,
  completed: false,
}]

const useSteps = () => {
  const [state, setState] = useStore()
  const { step, pan, bank, aadhar } = state

  const steps = useMemo(() => {
    const list = [
      ...(pan?.shouldProcess ? ['pan'] : []),
      ...(bank?.shouldProcess ? ['bank'] : []),
      ...(aadhar?.shouldProcess ? ['aadhar'] : []),
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
     
  }, [step, pan, bank, aadhar])

  const setStepProgress =  useCallback(
    key => 
      setState({ 
        ...state,
        step: step.map(item => {
          if (item.key === key) {
            return {
              ...item,
              inProgress: true,
            }
          }
          return item
        }),
      }),
      [step, setState]
    )

  const setStepComplete = useCallback(
    key =>
      setState({
        ...state,
        step: step.map(item => {
          if (item.key === key) {
            return {
              ...item,
              inProgress: false,
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

  return [steps, setStepProgress, setStepComplete, resetSteps]
}

export { useSteps, initialState }