import { useMemo } from 'react'
import { useStore } from './'

const validations = {
  pan: number => number.length === 10,
  aadhar: number => number.length === 12 && !isNaN(Number(number)),
  accountNumber: number => number.length === 12 && !isNaN(Number(number)),
  ifsc: code => code.length === 9,
}

const useInput = () => {
  const [state, setState] = useStore()
  const { pan, aadhar, bank } = state

  const inputs = useMemo(() => {
    return {
      pan: pan.number,
      aadhar: aadhar.number,
      ...(bank.type === 'bank' ? {
        bank: {
          accountNumber: bank.accountNumber,
          ifsc: bank.ifsc,
        }
      } : {}),
    }
  }, [pan, aadhar, bank])

  const setInputError = (key, status, on = '') =>
    setState(prev => ({ 
      ...prev,
      [key]: {
        ...prev[key],
        [`${on}error`]: status,
      }
    }))

  return [inputs, validations, setInputError]
}

export { useInput }