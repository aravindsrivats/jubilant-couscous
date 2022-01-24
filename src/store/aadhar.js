import { useStore } from './'

const initialState = {
  number: '',
  captcha: '',
  otp: '',
  shareCode: '',
}

const useAadhar = () => {
  const [state, setState] = useStore()
  const { aadhar } = state

  const setAadhar = data =>
    setState(prev => ({ 
      ...prev,
      aadhar: {
        ...prev.aadhar,
        ...data,
      }
    }))

  return [aadhar, setAadhar]
}

export { initialState, useAadhar }