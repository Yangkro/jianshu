import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
const HeaderWraper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 56px;
  background-color: white;
  border-bottom:1px solid #f0f0f0; 
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`
export const LogoContainer = styled.a.attrs({
  href: '/'
})`
  align-self: flex-start;
  flex-shrink: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`
// 中间区域
export const Nav = styled.div`
  width: 760px;
  height: 100%;
  margin: 0 auto;
  display: flex;

`
export const NavItems = styled.div`
  height: 100%;
  font-size: 17px;
  padding: 18px 20px;
  box-sizing: border-box;
  cursor: pointer;
`
// 搜索框
export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  outline: none;
  border: none;
  height: 38px;
  /* width: 160px; */
  width: ${({focused, mouseEnter}) => (focused || mouseEnter)? '240px':'160px'};
  margin-left: 20px;
  margin-top: 9px;
  padding: 0px 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 19px;
  background-color: #eee;
  transition: all 0.5s ease-in;
  &::placeholder{
    color: #999;
  }
`

// 搜索框盒子
export const SearchWrapr = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
   text-align: center;
    right: 2px;
    top: 13px;
    transition: all 0.2s ease-in;
    color: ${({ focused }) => focused ? "#fff" : '#999'};
    background-color: ${({focused}) => focused? '#999':'none'}
  }
`
// 热门搜素开始
export const SearchInfo = styled.div`
  z-index: 99;
  display: ${({ focused, mouseEnter }) => (focused || mouseEnter)? 'block' : 'none'};
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 65px;
  width: 255px;
  padding: 0px 20px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  transition: all 0.5s ease-in;
  &::before{
    content: '';
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: transparent transparent white transparent;
    position :absolute;
    top: -16px;
  }
`
export const SearchInfoTitle = styled.h6`
  display: inline-block;
  font-weight: 400;
  line-height: 20px;
  margin: 15px 0px;
  font-size: 14px;
  color: #969696;
  width: 120px;
`
export const SearchInfoSwitch = styled.a`
  font-size: 13px;
  margin: 15px 0px;
  float: right;
  color: #969696;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin: 8px 10px 0 0;
  padding: 0 5px;
  font-size: 13px;
  border: 2px solid #ddd;
  border-radius: 3px;
  color: #787878;
  cursor: pointer;
`
// 附加信息
export const Addition = styled.div`
  align-self: flex-end;
  /* 缩放时不变小 */
  flex-shrink: 0;
  width: 398px;
  margin:0 16px;
  height: 100%;
  /* background: pink; */
  display: flex;
  align-items: center;
`
export const AdditionItem = styled.div`
  flex: 1;
  font-size: 16px;
  color: #999;
  cursor: pointer;
  .iconfont{
    font-size: 24px;
  }
  .beta{
    color: #ec7259;
    font-size: 24px;
  }
`
export const AdditionButton = styled.div`
  flex: 1;
  position: relative;
  margin: 0 0 0 8px;
  .iconfont {
    position: absolute;
    z-index: 99999;
    left:10px;
    top: 12px;
    color: white;
  }
`
export default HeaderWraper 