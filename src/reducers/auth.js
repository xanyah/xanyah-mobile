import {
  AUTH_UPDATE_FIELD,
} from '../constants/actions'

const initialState = {
  email: '',
  errors: [],
  loading: false,
  password: '',
  passwordConfirmation: '',
  passwordInput: null,
  passwordToken: '',
  signedIn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AUTH_UPDATE_FIELD:
    return {
      ...state,
      [action.field]: action.value,
    }
  default:
    return state
  }
}
