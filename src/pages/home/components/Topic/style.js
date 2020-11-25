import styled from 'styled-components'
export const TopicWrapper = styled.div`
  /* 触发bfc */
  overflow: hidden;
  padding: 20px 0 10px 0;
`
export const TopicItem = styled.a.attrs({ href: "#" })`
  display:block;
  box-sizing: border-box;
  float: left;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  :hover{
    /* color: #000; */
  }
  &.last-topicItem{
    padding-left: 10px;
  }
`
export const TopicItemImg = styled.img.attrs(props => ({src: props.topicImg}))`
  width: 32px;
  height: 30px;
  display: block;
  float: left;
  margin-right: 10px;
`