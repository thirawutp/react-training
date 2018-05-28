import uuid from 'uuid/v4'

const initState = {
  apps: [
    {
      appId: 'aaa-111',
      status: 'dr',
      firstName: 'aaa',
      lastName: '111'
    },
    {
      appId: 'bbb-222',
      status: 'dr',
      firstName: 'bbb',
      lastName: '222'
    },
    {
      appId: 'ccc-333',
      status: 'sm',
      firstName: 'ccc',
      lastName: '333'
    }
  ],
  selectedId: -1
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

    default:
      return state
  }
}

export default applicationReducer