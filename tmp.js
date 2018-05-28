const { createStore, combineReducers } = require('redux')
const uuid = require('uuid/v4')

const Constant = {
  DELETE_APP: 'DELETE_APP',
  CREATE_APP: 'CREATE_APP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const initialAppState = {
  apps: [],
  selectedId: -1,
}

const createAppAction = { type: 'CREATE_APP'}
const deleteAppAction = appId => ({ type: 'DELETE_APP', payload: appId })
const editAppAction = (appId, key, value) => ({
  type: 'EDIT_APP',
  payload: {
    appId,
    key,
    value
  }
})

const applicationReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case Constant.CREATE_APP:
      return {
        selectedId: -1,
        // ...state,
        apps: [...state.apps, {
          appId: uuid(),
          fname: '-',
          lname: '-'
        }]
      }
    case 'DELETE_APP':
      return {
        ...state,
        apps: state.apps.filter(app => {
          return app.appId !== action.payload
        })
      }
    case 'EDIT_APP':
      return {
        ...state,
        apps: state.apps.map(app => {
          if(app.appId === action.payload.appId){
            return {
              ...app,
              [action.payload.key]: action.payload.value
            }
          }
          return app
        })
      }
    
    default:
      return state
  }
}

const initialAuthState = { isLogin: false, token: '' }

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case Constant.LOGIN:
      return {...state, isLogin: true, token: action.payload}
    case Constant.LOGOUT:
      return initialAuthState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  applications: applicationReducer
})

const store = createStore(rootReducer)

store.dispatch(createAppAction)
store.dispatch(createAppAction)
store.dispatch(createAppAction)

const secondAppId = store.getState().applications.apps[1].appId

store.dispatch(editAppAction(secondAppId, 'fname', 'oat'))
store.dispatch(editAppAction(secondAppId, 'age', 23))

const thirdAppId = store.getState().applications.apps[2].appId
store.dispatch(deleteAppAction(thirdAppId))

const loginAction = token => ({ 
  type: Constant.LOGIN,
  payload: token
})

const logoutAction = { type: Constant.LOGOUT }

store.dispatch(loginAction('this is token na'))
console.log(store.getState())
store.dispatch(logoutAction)
console.log(store.getState())





