import { useMemo } from 'react'

import { useStore } from './'

const initialState = {
  otp: '',
}

const useESign = () => {
  const [state, setState] = useStore()
  const { esign, aadhar } = state

  const data = useMemo(() => {
    return {
      ...esign,
      number: aadhar.number,
    }
  }, [esign, aadhar])

  const setESign = data =>
    setState(prev => ({ 
      ...prev,
      esign: {
        ...prev.esign,
        ...data,
      }
    }))

  return [data, setESign]
}

export { initialState, useESign }