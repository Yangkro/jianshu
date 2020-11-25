import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultStates = fromJS({
  title: '',
  content: ''
})
export default (state = defaultStates, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL: {
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    }
    default: 
      return state
  }
}