import React ,{ useState } from 'react'
import Button from '../Button'
import HeaderWraper, { LogoContainer, Nav, NavItems, Addition, AdditionItem, NavSearch, AdditionButton, SearchWrapr } from './style'
function Header() {
  // 定义一个鼠标是否聚焦输入框的状态
  const [focused, setFocused] = useState(false)
  function handleInputFocus() {
    setFocused(true)
  }
  function handleInputBlur() {
    setFocused(false)
  }
  // 首页头部的拼接
  return (
    <HeaderWraper>
      <LogoContainer />
      <Nav>
        <NavItems>首页</NavItems>
        <NavItems>下载APP</NavItems>
        <SearchWrapr focused={focused}>
          <NavSearch
            onFocus={handleInputFocus.bind(this)}
            onBlur={handleInputBlur.bind(this)}
            focused={focused}
          />
          <i className='iconfont'>&#xe610;</i>
        </SearchWrapr>
      </Nav>
      <Addition>
        <AdditionItem>
          <i className='iconfont'>&#xe636;</i>
        </AdditionItem>
        <AdditionItem>
          <i className='iconfont beta'>&#xe676;</i>
          <i className='iconfont beta'>&#xe64c;</i>
        </AdditionItem>
        <AdditionItem>登录</AdditionItem>
        <AdditionButton>
          <Button type="secondary" bgColor='#ec7259' height="40px" width="82px">注册</Button>
        </AdditionButton>
        <AdditionButton>
        <i className='iconfont'>&#xe708;</i>
          <Button bgColor="#ec7259" height="40px" width='108px'>写文章</Button>
        </AdditionButton>
      </Addition>
    </HeaderWraper>
  )
}
export default Header