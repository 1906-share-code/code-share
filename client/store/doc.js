import axios from 'axios'

const UPDATE_DOCS_TABLE = 'UPDATE_DOCS_TABLE'
const GET_DOCS = 'GET_DOCS'

export const getDocs = doc => ({
  type: GET_DOCS,
  doc
})

export const updateDocsTable = doc => ({
  type: UPDATE_DOCS_TABLE,
  doc
})

export const getDocsThunk = (userId, docname) => async dispatch => {
  console.log('you made it to getDocshunkT')
  const {data} = await axios.get(`/api/docs/${userId}/${docname}`)
  console.log(data)
  dispatch(getDocs())
}

export const updateDocThunk = (userId, docname) => async dispatch => {
  console.log('you made it to updateDocThunk')
  const {data} = await axios.post(`/api/docs/${userId}/${docname}`)
  console.log(data)
  dispatch(updateDocsTable())
}

export default function docReducer(doc = '', action) {
  console.log('made it to reducer')
  console.log(action)
  switch (action.type) {
    case UPDATE_DOCS_TABLE:
      return action.doc
    case GET_DOCS:
      return action.doc
    default:
      return doc
  }
}
