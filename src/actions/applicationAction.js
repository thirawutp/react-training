export const createApp = () => ({
  type: 'CREATE_APP'
})

export const selectedApp = (appId) => ({
  type: 'SELECTED_APP',
  payload: appId
})

export const deleteApp = (appId) => ({
  type: 'DELETE_APP',
  payload: appId
})

export const updateForm = (id, key, value) => ({
  type: 'UPDATE_FORM',
  payload: { id, key, value }
})