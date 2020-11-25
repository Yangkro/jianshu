import { actionTypes } from './index'
// 导入immutable防止直接修改state，用immutable后就不可以直接修改对象的属性了
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseEnter: false,
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUSED: {
      // 引入immutable后可以进行链式操作，返回值是一个Map对象
      // console.log(state.set('focused', true))
      return state.set('focused', true)
    }
    case actionTypes.SEARCH_BLUR: {
      return state.set('focused', false)
    }
    case actionTypes.CHANGE_LIST: {
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      // 等同于下面merge相当于多次调用set函数
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    }
    case actionTypes.ONMOUSEENTER: {
      return state.set('mouseEnter', true)
    }
    case actionTypes.ONMOUSELEAVE: {
      return state.set('mouseEnter', false)
    }
    case actionTypes.CHANGE_PAGE: {
      return state.set('page', action.page)
      }
    default:
    return state
  }
}