import React from 'react'
import {DownLoadWrapper, DownloadLeft, DownloadRight, DownloadTitle, DownloadInfo} from './style'
export default function DownloadAPP(){

  return (
    <DownLoadWrapper>
      <DownloadLeft />
      <DownloadRight>
        <DownloadTitle>
          下载简书手机APP
        </DownloadTitle>
        <DownloadInfo>随时随地的发现和创造内容</DownloadInfo>
      </DownloadRight>
    </DownLoadWrapper>
  )
}