import React,{useEffect} from 'react'
import { HomeWrapper, HomeLeft, HomeRight, FirstBanner } from './style'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import banner1 from '../../upload/banner.jpeg'
import banner2 from '../../upload/banner2.jpeg'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import DownloadAPP from './components/DownloadApp'
import { connect } from 'react-redux'
import {actionCreators} from './store'
import BackTop from './components/BackTop'
// react-hooks/exhaustive-deps
function Home(props) {
  const { showScroll } = props
  useEffect(() => {
    props.initHomePageInfo()
    // 在下面禁用eslint，防止自动填充useEffect的第二个参数，因为初始化信息不需要更新
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', props.changeScroll)
    return () => {
      window.removeEventListener('scroll', props.changeScroll)
    }
  }, [props, showScroll])
  return (
    <HomeWrapper>
      <HomeLeft>
        <Carousel autoplay>
          <div>
              <FirstBanner Pic={banner1}/>
          </div>
          <div>
              <FirstBanner Pic={banner2}/>
          </div>
        </Carousel>
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <DownloadAPP />
        <Writer />
      </HomeRight>
      {/* 超过特定的高度时会显示这个回到顶部按钮 */}
      {
        props.showScroll ? <BackTop />: null
      }
    </HomeWrapper>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    initHomePageInfo() {
      dispatch(actionCreators.getHomePageInfo())
    },
    changeScroll() {
      if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toogleTopShow(true))
      } else {
        dispatch(actionCreators.toogleTopShow(false))
      }
    }
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)