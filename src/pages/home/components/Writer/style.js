import styled from 'styled-components'
// WriterWrapper, WriterItem, WriterAvatar, WriterName, WriterInfo, FollowWriter
const WriterWrapper = styled.ul`
  margin-bottom: 15px;
`
const WriterHeader = styled.div`
  overflow: hidden;
`
const WriterHead = styled.h6`
  float: left;
  font-size: 14px;
  color: #969696;
`
const WriterSwitch = styled.span.attrs({})`
  float: right;
  font-size: 14px;
  cursor: pointer;
  color: #969696;
`
const WriterItem = styled.li`
  list-style: none;
  margin-top: 15px;
  line-height: 20px;
  width: 100%;
  height: 48px;
`
const WriterAvatar = styled.img.attrs(props => ({src: props.avatar}))`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid #ddd;
  float: left;
  margin-right: 10px;
`
const WriterName = styled.a.attrs({ href: '#' })`
  padding-top: 5px;
  margin-right: 60px;
  color: #333;
  cursor: pointer;
  display: block;
  font-size: 14px;
  :hover{ 
    color: #333;
  }
`
const WriterInfo = styled.p`
  font-size: 12px;
  color: #969696;
  margin: 2px 0 10px;
`
const WriterFollow = styled.a`
  color: #42c02e;
  font-size: 13px;
  float: right;

  :hover{
    color: #42c02e;
  }
  ::before{
    content: '+';
    font-weight: 700;
    font-size: 17px;
  }
`
const AllWriter = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
  font-size: 13px;
  color: #787878;
  :hover{
    color: #787878;
  }
`
export {WriterWrapper, WriterItem, WriterAvatar, WriterName, WriterInfo, WriterHeader, WriterHead, WriterSwitch, WriterFollow, AllWriter}