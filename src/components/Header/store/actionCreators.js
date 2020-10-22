import Axios from 'axios'
import { actionTypes } from './index'
import {fromJS} from 'immutable'
export const onSearchFocused = () => {
  return {
    type: actionTypes.SEARCH_FOCUSED
  }
}
export const onSearchBlured = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  }
}
export const changeList = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    // 使用immutable将替换的数组转换为immutable类型
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 9)
  }
}
export const onInfoMouseLeave = () => {
  return {
    type: actionTypes.ONMOUSELEAVE
  }
}
export const onInfoMouseEnter = () => {
  return {
    type: actionTypes.ONMOUSEENTER
  }
}
export const onChangePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}
export const getList = () => {
  // 由于使用了redux-thunk，所以返回值可以不仅仅是对象，可以是一个函数
  return (dispatch) => {
    Axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      // 必须捕获错误，不然会报错
    })
  }
}