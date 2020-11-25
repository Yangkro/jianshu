import React from 'react'
import { TopicWrapper, TopicItem, TopicItemImg } from './style'
import { connect } from 'react-redux'
function Topic(props) {
  const topicList = props.topicList
  return (
    <TopicWrapper>
      {
        topicList.map((item) =>  (
          <TopicItem key={item.get('id')}>
            <TopicItemImg topicImg={item.get('topicImg')} />
            {item.get('title')}
          </TopicItem>
        ))
      }
      <TopicItem className="last-topicItem">
        更多热门专题&#62;&#62;
      </TopicItem>
    </TopicWrapper>
  )
}
const mapStateToProps = (state) => {
  // console.log(state.get('home').get('topicList'))
  return {
    topicList: state.get('home').get('topicList')
  }
}
export default connect(mapStateToProps, null)(Topic)