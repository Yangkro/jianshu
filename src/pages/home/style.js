import styled from 'styled-components'
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  /* height: 400px; */
 `
//  home页面的左边部分
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
// banner图的背景
export const FirstBanner = styled.div`
  height: 270px;
  color: #fff;
  line-height: 160px;
  text-align: center;
   background-size: auto 270px;
   background-image: url(${({Pic}) => Pic});
`