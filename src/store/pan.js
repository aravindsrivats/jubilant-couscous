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
    ({ target: { value }}) =>
      setState({ 
        ...state,
        pan: {
          ...state.pan,
          number: value,
        }
      }),
    [setState],
  )

  return [pan, setPan]
}

export { initialState, usePan }