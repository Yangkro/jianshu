import * as actionTypes from './actionTypes'
// 这些数据新版的简书上没有了，所以就用本地的图片了，就不模拟请求后端数据了，嘿嘿
import topic1 from '../../../upload/topicPIc/topic1.jpg'
import topic2 from '../../../upload/topicPIc/topic2.jpg'
import topic3 from '../../../upload/topicPIc/topic3.jpg'
import topic4 from '../../../upload/topicPIc/topic4.jpg'
import topic5 from '../../../upload/topicPIc/topic5.jpg'
import topic6 from '../../../upload/topicPIc/topic6.jpg'
import topic7 from '../../../upload/topicPIc/topic7.jpg'
import topic8 from '../../../upload/topicPIc/topic8.jpg'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '春天的风',
    topicImg: topic1
  },{
    id: 2,
    title: '古风',
    topicImg: topic2
  },{
    id: 3,
    title: '盛夏的花',
    topicImg: topic3
  },{
    id: 4,
    title: '紫色的薰衣草',
    topicImg: topic4
  },{
    id: 5,
    title: '可爱动物',
    topicImg: topic5
  },{
    id: 6,
    title: '爱情',
    topicImg: topic6
  },{
    id: 7,
    title: '多情的红叶',
    topicImg: topic7
  },{
    id: 8,
    title: '东京食尸鬼',
    topicImg: topic8
    },],
  articleList: [],
  articlelPage: 1,
  recommendImgList: [],
  writerList: [],
  writerPage: 1,
  writerTotalPage: 2,
  showScroll: false,
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_WRITER_PAGE: {
      return state.set('writerPage', action.writerPage)
    }
    case actionTypes.GET_MORE_LIST_INFO: {
      return state.merge({
        articleList: state.get('articleList').concat(action.moreHomeList),
        articlelPage: action.articlelPage
      })
      }
    case actionTypes.INIT_HOME_PAGE_DATA: {
      return state.merge({
        writerList: action.writerList,
        writerTotalPage: action.writerTotalPage,
        recommendImgList: action.recommendImgList,
        articleList: action.articleList
      })
    }
    case actionTypes.TOGGLE_SCROLL: {
      return state.set('showScroll', action.show)
      }
    default: 
      return state
  }
}