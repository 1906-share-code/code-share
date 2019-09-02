import axios from 'axios'

const UPDATE_DOCS_TABLE = 'UPDATE_DOCS_TABLE'

export const updateDocsTable = update => ({
  type: UPDATE_DOCS_TABLE,
  update
})

export const updateDocThunk = (userId, docname) => async dispatch => {
  const {data} = await axios.post(`/api/docs/${userId}/${docname}`)
  dispatch(updateDocsTable(data))
}

export function docReducer(update = '', action) {
  switch (action.type) {
    case UPDATE_DOCS_TABLE:
      return action.update
    default:
      return update
  }
}
