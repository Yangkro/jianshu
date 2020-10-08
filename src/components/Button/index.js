import React from 'react'
import ProTypes from 'prop-types'
import StyledButton from './style'
function Button({
  children,
  type = 'primary',
  shape = 'rect',
  size = '48px',
  height = '38px',
  width = '82px',
  bgColor,
  ...rest
  }) {
   
  return (
    <StyledButton
        type={type}
        shape={shape}
        size={size}
      bgColor={bgColor}
      height={height}
      width={width}
        {...rest}
    >
      {children}
    </StyledButton>
  )
}
Button.ProTypes = {
  children: ProTypes.any,
  type: ProTypes.oneOf(['primary', 'secondary']),
  shape: ProTypes.oneOf(['circle', 'rect']),
  width: ProTypes.string,
  height: ProTypes.string,
  size: ProTypes.string,
  bgColor: ProTypes.string
}
export default Button
