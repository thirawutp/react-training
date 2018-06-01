const initState = {
  lang: 'th'
}

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}

export default uiReducer