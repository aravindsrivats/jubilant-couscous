import { useCallback } from 'react'

import { useStore } from './'

const initialState = {
  type: 'upi',
  shouldProcess: true,
  ifsc: '',
  accountNumber: '',
}

const useBank = () => {
  const [state, setState] = useStore()
  const { bank } = state

  const setBank = useCallback(
    data =>
      setState({ 
        ...state,
        bank: {
          ...state.bank,
          ...data,
        }
      }),
    [setState],
  )

  return [bank, setBank]
}

export { initialState, useBank }