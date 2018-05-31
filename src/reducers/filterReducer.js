const initState = {
  text: '',
  status: '',
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }
    default:
      return state
  }
}

export default filterReducer