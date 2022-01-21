import { useStore } from './'

const initialState = {
  number: '',
}

const usePan = () => {
  const [state, setState] = useStore()
  const { pan } = state

  const setPan = data =>
    setState({ 
      ...state,
      pan: {
        ...state.pan,
        ...data,
      }
    })

  return [pan, setPan]
}

export { initialState, usePan }