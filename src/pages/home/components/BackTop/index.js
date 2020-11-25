import React from 'react'
import BackTopButton from './style'
function handleScrollTop() {
  window.scrollTo(0, 0);
}
export default function BackTop() {
  return (
    <BackTopButton onClick={ handleScrollTop}/>
  )
}
