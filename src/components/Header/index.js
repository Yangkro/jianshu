import React  from 'react'
import Button from '../Button'
import HeaderWraper, { LogoContainer, Nav, NavItems, Addition, AdditionItem, NavSearch, AdditionButton, SearchWrapr, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
function Header(props) {
  // 将immutable的list转化为普通的list
  const newList = props.list.toJS()
  let pageList = []
  if (newList.length) {
    for (let i = (props.page - 1) * 9; i < props.page * 9; i++){
      pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
    }
  }
  return (
    <HeaderWraper>
      <LogoContainer />
      <Nav>
        <NavItems>首页</NavItems>
        <NavItems>下载APP</NavItems>
        <SearchWrapr focused={props.focused}>
          <NavSearch
            onFocus={props.handleInputFocus}
            mouseEnter = {props.mouseEnter}
            onBlur={props.handleInputBlur}
            focused={props.focused}
          />
          <i className='iconfont'>&#xe610;</i>
          {/* 热搜信息的弹出不仅仅由focused控制 */}
          <SearchInfo
            focused={props.focused}
            mouseEnter = {props.mouseEnter}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
            </SearchInfoTitle>
            <SearchInfoSwitch
            onClick={() => props.handleSwitch(props.page, props.totalPage)}
            >
                换一换
               </SearchInfoSwitch>
            <SearchInfoList>
              {/* 可以将装有组件的数组直接转化为组件 */}
              { pageList }
              </SearchInfoList>
          </SearchInfo>
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
// 形参state是store中的数据
const mapStateToProps = (state) => {
  return {
    // 将仓库中focus映射到当前组件的focus
    // 因为进行了分库所以从header中取
    focused: state.get('header').get('focused'),
    // 下面这种写法等同于上面的写法
    list: state.getIn(['header', 'list']),
    // 获取页数
    page: state.getIn(['header', 'page']),
    totalPage: state.get('header').get('totalPage'),
    mouseEnter: state.getIn(['header','mouseEnter'])
  }
}
// 形参dispatch是指store.dispatch
const mapDispatchToprops = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.onSearchFocused()
      dispatch(action)
      // 派发向服务器请求数据的action
      dispatch(actionCreators.getList())
    },
     handleInputBlur() {
       const action = actionCreators.onSearchBlured()
       dispatch(action)
    },
    handleMouseEnter() {
      const action = actionCreators.onInfoMouseEnter()
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionCreators.onInfoMouseLeave()
      dispatch(action)
    },
    handleSwitch(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.onChangePage(page + 1))
      } else {
        dispatch(actionCreators.onChangePage(1))
      }
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToprops)(Header)
// export default Header