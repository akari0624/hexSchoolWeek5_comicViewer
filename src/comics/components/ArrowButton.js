import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const ArrowButtonWrapper = Styled.div`
  width:30px;
  font-size:30px;
  color:#000000;
  background-color:#FFFFFF;
  text-align:center;
  display:flex;
  align-items:center;

    &:hover{
       background-color:#000000;
       color:#FFFFFF;
  }
`




const renderDifferentButtonByProps = (direction) => {

  if(direction === 'left'){
    return <i className="fas fa-arrow-left"></i>;
  }

  if(direction === 'right'){
    return <i className="fas fa-arrow-right"></i>
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