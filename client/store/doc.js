import axios from 'axios'

const UPDATE_DOCS_TABLE = 'UPDATE_DOCS_TABLE'

export const updateDocsTable = () => ({
  type: UPDATE_DOCS_TABLE
})

export const updateDocThunk = (userId, docname) => async dispatch => {
  console.log('you made it to updateDocThunk')
  const {data} = await axios.put(`/api/docs/${userId}/${docname}`)
  console.log(data)
  dispatch(updateDocsTable())
}

export default function docReducer(state = {}, action) {
  console.log('made it to reducer')
  console.log(action)
  switch (action.type) {
    case UPDATE_DOCS_TABLE:
      return action.update
    default:
      return state
  }
}
