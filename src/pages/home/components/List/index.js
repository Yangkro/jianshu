import React from 'react'
import { ListItem, ListInfon, ListTitle, ListImg, ListAddition, ListInfoText , LoadMore} from './style'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'
import { Link } from 'react-router-dom'
// import { get } from 'immutable'
function List(props) {
  const articleList = props.articleList
  return (
    <div>
      {
        articleList.map((item, index) => {
          
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem >
                <ListInfon >
                    <ListTitle>{item.get('title')}</ListTitle>
                    <ListInfoText>{item.get('description')}</ListInfoText>
                </ListInfon>
                <ListAddition></ListAddition>
                <ListImg ListPic={item.get('imgURL')}/>
            </ListItem>
            </Link>
)
        })
      }
      <LoadMore onClick={() => props.onHandleLoadMore(props.articlelPage)}>阅读更多</LoadMore>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList'),
    articlelPage: state.get('home').get('articlelPage')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onHandleLoadMore(articlelPage) {
      dispatch(actionCreators.getMoreList(articlelPage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
/* 
* 之前采用的是用id作为key值，但是由于阅读更多数据为重复数据，所以会有重复，因此采用index作为key值，但是index作为key值会有事件绑定等bug(该demo中不深入研究，具体实际项目中key值为数据库中的内容不会重复)
* 在第15行向下一个页面传递id 
*/ 