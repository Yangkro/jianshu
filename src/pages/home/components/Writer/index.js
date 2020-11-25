import React from 'react'
import { WriterWrapper, WriterItem, WriterAvatar, WriterName, WriterInfo, WriterHeader, WriterHead, WriterSwitch ,WriterFollow, AllWriter} from './style'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'
function Writer(props) {
  const writerList = props.writerList.toJS()
  const writerPage = props.writerPage
  const writerTotalPage = props.witerTotalPage
  let itemList = []
  if (writerList.length) {
    for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++){
      itemList.push(
        <WriterItem key={writerList[i].id}>
        <WriterAvatar avatar={writerList[i].writerAvater} />
        <WriterFollow>关注</WriterFollow>
          <WriterName >{writerList[i].name}</WriterName>
        <WriterInfo>写了{writerList[i].wordCount}字	&#9670; {writerList[i].likeCount}喜欢</WriterInfo>
      </WriterItem>
      )
    }
  }
  return (
    <>
      <WriterWrapper>
        <WriterHeader>
          <WriterHead>推荐作者</WriterHead>
          <WriterSwitch onClick={() => props.handleSwithWiter(writerPage, writerTotalPage)}>换一换</WriterSwitch>
        </WriterHeader>
        {
          itemList
        }
      </WriterWrapper>
      <AllWriter>查看全部 &gt;</AllWriter>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList']),
    writerPage: state.getIn(['home', 'writerPage']),
    witerTotalPage: state.getIn(['home', 'writerTotalPage']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSwithWiter(writerPage, writerTotalPage) {
      if (writerPage < writerTotalPage) {
        dispatch(actionCreators.onSwitchWriterPage(writerPage + 1))
      } else {
        dispatch(actionCreators.onSwitchWriterPage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer)