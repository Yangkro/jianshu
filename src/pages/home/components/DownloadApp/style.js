import styled from 'styled-components'
import downloadPic from '../../../../upload/downloadApp/downloadPic.png'
export const DownLoadWrapper = styled.a.attrs({ href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click' })`
  position: relative;
  display: block;
  width: 280px;
  height: 82px;
  padding: 10px 22px;
  margin: 0 0 30px;
  box-sizing: border-box;
  font-size: 17px;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  :hover{
    ::before{
      content: "";
      position: absolute;
      top: -170px;
      left: 60px;
      display: block;
      height: 160px;
      width: 160px;
      padding: 20px;
      border-radius: 4px;
      background-color: white;
      background-image: url(${downloadPic});
      background-size: 140px 140px;
      background-repeat: no-repeat;
      background-position: center center;
      box-shadow: 4px 6px 6px rgba(0 , 0, 0, 0.3);
      }
      ::after{
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 10px solid red;
        border-color: white transparent transparent transparent;
        position: absolute;
        top: -10px;
        left: 135px;
    }
  }
`
export const DownloadLeft = styled.img.attrs({ src: downloadPic })`
  display: inline-block;
  height: 60px;
  width: 60px;
  opacity: 0.85;
  vertical-align: middle;
`
export const DownloadRight = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #999;
  margin-left: 7px;
  vertical-align: middle;
  overflow: hidden;
`
export const DownloadTitle = styled.h6`
  position: relative;
  font-weight: 400;
  font-size: 15px;
  color: #333;
  letter-spacing: 1px;
  ::after{
    display: block;
    content: "";
    position: absolute;
    right: 14px;
    top: 0px;
    height: 12px;
    width: 10px;
    border: 2px solid #333;
    border-left: none;
    border-top: none;
    transform: rotate(-45deg);
  }
`
export const DownloadInfo = styled.p`
  margin-top: 8px;
`