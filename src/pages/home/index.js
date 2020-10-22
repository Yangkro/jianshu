import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight, FirstBanner } from './style'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
function Home() {
  
  return (
    <HomeWrapper>
      <HomeLeft>
      <Carousel autoplay>
    <div>
        <FirstBanner className="firstBanner"/>
    </div>
    <div>
      <FirstBanner className="secondBanner"/>
    </div>
    <div>
    <FirstBanner/>
    </div>
  </Carousel>
      </HomeLeft>
      <HomeRight>Right</HomeRight>
    </HomeWrapper>
  )
}
export default Home