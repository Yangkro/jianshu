import styled from 'styled-components'
export const RecommendWrapper = styled.div`
  padding: 30px 0 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background-image: url(${({ RecommendPic }) => RecommendPic});
  background-size: contain;
  /* background-color: red; */
  margin-bottom: 6px;
  border-radius: 4px;
`