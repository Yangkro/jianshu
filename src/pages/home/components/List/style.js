import styled from 'styled-components'
export const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #f0f0f0;
  padding:15px 2px 20px 0;
  margin-bottom: 20px;
`
export const ListInfon = styled.div`
  padding-right: 150px;
`
export const ListTitle = styled.span`
  display: inherit;
  margin: -7px 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  line-height: 1.5;
  
  :hover{
    color: black;
    text-decoration: underline;
  }
  :visited{
    color: #969696;
  }
  
`
export const ListImg = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 150px;
  height: 100px;
  margin-top: -50px;
  background-image: url(${({ ListPic }) => ListPic});
  background-size: 150px 100px;
`
export const ListInfoText = styled.article`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`
export const ListAddition = styled.div`

`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  background-color: #a5a5a5;
  cursor: pointer;
  color: white;
  line-height: 24px;
`