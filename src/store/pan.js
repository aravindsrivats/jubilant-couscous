import { useStore } from './'

const initialState = {
  number: '',
}

const usePan = () => {
  const [state, setState] = useStore()
  const { pan } = state

  const setPan = data =>
    setState(prev => ({ 
      ...prev,
      pan: {
        ...prev.pan,
        ...data,
      }
    }))

  return [pan, setPan]
}

export { initialState, usePan }