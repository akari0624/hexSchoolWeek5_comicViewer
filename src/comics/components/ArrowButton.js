import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const ArrowButtonWrapper = Styled.div`
  position:relative;
  bottom:50%;
  transform:translateY(50%);
  width:30px;
  display:inline-block;
  font-size:0;
  color:#000000;

  &:hover{
    color:#FFFFFF;
    background-color:#000000;
  }
`

const ArrowButtonInside = Styled.a`
  width:100%;
  color:#000000;
  font-size:30px;
  text-decoration:none;
  line-height:100%;
`


const renderDifferentButtonByProps = (direction) => {

  if(direction === 'left'){
    return <ArrowButtonInside>&lt;</ArrowButtonInside>
  }

  if(direction === 'right'){
    return <ArrowButtonInside>&gt;</ArrowButtonInside>
  }

}

const ArrowButton = props => (


  <ArrowButtonWrapper {...props}>
    {renderDifferentButtonByProps(props.direction)}
  </ArrowButtonWrapper>

)


ArrowButton.propTypes = {

  direction:PropTypes.string.isRequired,

}

export default ArrowButton