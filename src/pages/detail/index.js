import React, { useEffect } from 'react'
import { DetailWrapper , ArticleInfo, WriterInfo, DetailFooter, ArticleTitle, ArticleParagraph, DetailBackground} from './style'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
function Detail(props) {
  const id = props.match.params.id
  useEffect(() => {
    // 动态路由传递参数，标识不同的页面
    props.getDetailInfo(id)
    // eslint-disable-next-line
  }, [])
  console.log(id)
  return (
     <DetailBackground>
      <DetailWrapper>
        <ArticleInfo>
          <ArticleTitle>
            {props.title}
          </ArticleTitle>
          <ArticleParagraph
            dangerouslySetInnerHTML={{ __html: props.content }} 
          />
        </ArticleInfo>
        <WriterInfo>待完成</WriterInfo>
      </DetailWrapper>
      <DetailFooter></DetailFooter>
      </DetailBackground>
  )
}
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailInfo(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Detail)