import styled from 'styled-components'
const BackTopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  transition: all 0.2s ease-in;
  ::after{
    content: '';
    position: absolute;
    left: 14px;
    top: 18px;
    display: inline-block;
    height:20px;
    width: 20px;
    box-sizing: border-box;
    border: 2px solid #333;
    border-color: #333 #333 transparent transparent;
    transform: rotate(-45deg);
    border-radius: 1px;
  }
  :hover{
    background-color: #eee;
  }
`
export default BackTopButton