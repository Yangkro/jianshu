import * as actionTypes from './actionTypes'
import axiso from 'axios'
import { fromJS } from 'immutable'
export const onSwitchWriterPage = (writerPage) => {
  return {
    type: actionTypes.SWITCH_WRITER_PAGE,
    writerPage
  }
}
const getMoreListInfo = (data, nextpage) => {
  return {
    type: actionTypes.GET_MORE_LIST_INFO,
    moreHomeList: fromJS(data.moreHomeList),
    articlelPage: nextpage
  }
}
// 阅读更多
export const getMoreList = (page) => {
  return (dispatch) => {
    axiso.get('/api/moreHomeList.json?page=' + page)
      .then((response) => {
        const data = response.data
        dispatch(getMoreListInfo(data, page+1))
    })
  }
}
const initHomeData = (data) => {
  return {
    type: actionTypes.INIT_HOME_PAGE_DATA,
    writerList: fromJS(data.writerList),
    writerTotalPage: (data.writerList.length) / 5,
    recommendImgList: fromJS(data.recommendImgList),
    articleList: fromJS(data.articleList)
  }
}
// 使用redux-thunk使用异步请求
export const getHomePageInfo = () => {
  // 进行异步请求
  return (dispatch) => {
    axiso.get('/api/homeData.json')
      .then((response) => {
      const data = response.data
      // console.log(data)
      dispatch(initHomeData(data))
    })
  }
}
// 控制回到顶部按钮是否显示
export const toogleTopShow = (show) => {
  return {
    type: actionTypes.TOGGLE_SCROLL,
    show
  }
}