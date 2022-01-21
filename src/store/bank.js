import { useStore } from './'

const initialState = {
  type: 'upi',
  ifsc: '',
  accountNumber: '',
}

const useBank = () => {
  const [state, setState] = useStore()
  const { bank } = state

  const setBank = data =>
    setState({ 
      ...state,
      bank: {
        ...state.bank,
        ...data,
      }
    })

  return [bank, setBank]
}

export { initialState, useBank }