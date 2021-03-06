import uuid from 'uuid/v4'

const initState = {
  apps: [
    {
      appId: 'aaa-111',
      status: 'dr',
      insured_firstName: 'aaa',
      insured_lastName: '111'
    },
    {
      appId: 'bbb-222',
      status: 'dr',
      insured_firstName: 'bbb',
      insured_lastName: '222'
    },
    {
      appId: 'ccc-333',
      status: 'sm',
      insured_firstName: 'ccc',
      insured_lastName: '333'
    }
  ],
  selectedId: 'aaa-111'
}

const applicationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_APP':
      return {
        ...state,
        apps: [
          ...state.apps,
          {
            appId: uuid(),
            status: 'dr',
          }
        ]
      }
    case 'SELECTED_APP':
      return {
        ...state,
        selectedId: action.payload
      }

    case 'DELETE_APP':
      return {
        ...state,
        apps: state.apps.filter(app => {
          return app.appId !== action.payload
        })
      }

    case 'UPDATE_FORM':
      return {
        ...state,
        apps: state.apps.map(app => {
          if (app.appId === action.payload.id) {
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

export default applicationReducer