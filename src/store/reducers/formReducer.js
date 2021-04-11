const initialState = {
  value: ''
}

export const form = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_FORM':
      return {
        value: action.payload
      }
    default:
      return state
  }
}