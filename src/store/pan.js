import { useCallback } from 'react'

import { useStore } from './'

const initialState = {
  number: '',
  shouldProcess: true,
}

const usePan = () => {
  const [state, setState] = useStore()
  const { pan } = state

  const setPan = useCallback(
    data =>
      setState({ 
        ...state,
        pan: {
          ...state.pan,
          ...data,
        }
      }),
    [setState],
  )

  return [pan, setPan]
}

export { initialState, usePan }