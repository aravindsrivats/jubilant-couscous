import { useCallback, useMemo } from 'react'

import { useStore, initialState as baseAppState } from './'

const initialState = [{
  key: 'pan',
  name: 'PAN verification',
  tag: 'PAN verification',
}, {
  key: 'bank',
  name: 'Bank account verification',
  tag: 'PAN verification',
}, {
  key: 'aadhar',
  name: 'Offline Aadhar Verification (OKYC)',
  tag: 'OKYC',
}, {
  key: 'esign',
  name: 'E-Sign',
  tag: 'E-Sign',
}]

const useSteps = () => {
  const [state, setState] = useStore()
  const { step } = state

  const activeSteps = useMemo(() => 
    step.filter(item => item.inQueue)
  , [step])

  const setStepQueue = (key, status) => 
    setState({
      ...state,
      step: step.map(item => {
        if (item.key === key) {
          return {
            ...item,
            inQueue: status,
          }
        }
        return item
      })
    })

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

  const resetSteps = () => 
    setState({
      ...baseAppState,
    })

  return [activeSteps, setStepQueue, setStepProgress, setStepComplete, resetSteps]
}

const useStepList = () => {
  const [state] = useStore()
  const { step } = state
  return step
}

export { useSteps, useStepList, initialState }