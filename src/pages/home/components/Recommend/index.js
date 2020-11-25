import React from 'react'
import { connect } from 'react-redux'
import {RecommendWrapper, RecommendItem} from './style'
function Recommend(props) {
  const list = props.list
  return (
    <RecommendWrapper >
      {
        list.map(item => <RecommendItem key={item.get('id')} RecommendPic={item.get('recommendImgURL')} />)
      }
    </RecommendWrapper>
  )
}   
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendImgList'])
  }
}
export default connect(mapStateToProps, null)(Recommend)