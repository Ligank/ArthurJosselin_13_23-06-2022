import { initialeState } from '../store/configureStore'

export function reducer (state, action) {
  if (state === undefined) {
    state = initialeState
  }
  switch (action.type) {
    case 'error' : return { ...state, status: 'error' }
    case 'loading' :
      return { ...state, status: 'loading' }
    case 'connexion' : {
      return { ...state, token: action.payload.body.token, status: 'connexion' }
    }
    case 'profile' : {
      return {
        ...state,
        connected: true,
        status: 'connecte',
        user: {
          ...state.user,
          prenom: action.payload.body.firstName,
          nom: action.payload.body.lastName
        }
      }
    }
    case 'updateUser' : {
      return {
        ...state,
        user: {
          ...state.user,
          prenom: action.payload.body.firstName,
          nom: action.payload.body.lastName
        }
      }
    }
    case 'deconnexion' : {
      return {
        ...state,
        connected: false,
        token: '',
        status: 'void',
        user: {
          ...state.user,
          prenom: '',
          nom: ''
        }
      }
    }
    default:
  }
  return state
}