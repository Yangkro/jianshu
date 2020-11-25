import axios from 'axios'
import * as actionTypes from './actionTypes'
const changeDetail = (data) => {
  return {
    type: actionTypes.GET_DETAIL,
    data: data
  }
}
export const getDetail = (id) => {
  return (dispatch) => {
    // 这里为啥使用绝对链接，因为在访问detail页面的时候更改默认前面部分为'http://localhost:3000/detail'，这样就娶不到数据了
    axios.get('/api/detail.json?id='+id).then((response) => {
      const data = response.data.data
      dispatch(changeDetail(data))
    })
  }
}