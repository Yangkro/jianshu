import styled, { css } from 'styled-components'
// 定义形状变体是原型按钮还是圆角矩形按钮
const shapeVariants = {
  circle: css`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
  `,
  // 圆角矩形
  rect: css`
    height: ${(height) => height};
    width: ${(width) => width};
    ${'' /* padding: 10px 18px; */}
    border-radius: 20px;
  `
}
//定义类型变体，是否是边框按钮还是全填充按钮
const typeVariants = {
  secondary: css`
    border: 1px solid;
    color: ${({ bgColor }) => bgColor};
    background-color: white;
    border-color: ${({ bgColor }) => bgColor};
  `,
  primary: css`
    border: none;
    color: white;
    background-color: ${({bgColor}) => bgColor};
  `
}
// 导出一个按钮组件
const StyledButton = styled.button`
  position: relative;
  outline: none;
  cursor: pointer;
  overflow:hidden;
  font-size: 16px;
  ${({ shape }) => shapeVariants[shape]};
  ${({ type }) => typeVariants[type]};
/* 添加过渡动画 */
  transition: all 0.4s ease-in;
  &:hover{
   box-shadow: 2px 4px 4px rgba(236, 114, 89, 0.2);
  }
  /* ::selection {
    color: #fff;
    background: #ec7259;
} */
  /* 添加一个伪元素的颜色遮罩层 */
  &::after{
    content: "";
    opacity: 0;
    z-index: 999;
    background-color: #ec7259; 
    height: ${(size) => size};
    width: ${(size) => size};
    ${({ shape }) => shapeVariants[shape]};
    position: absolute;
    left: 0;
    top: 0;
    /* 添加过渡效果 */
    transition: all 0.5s ease-in;
  }
  &:hover::after{
    opacity: 0.2;
  }
`
export default StyledButton