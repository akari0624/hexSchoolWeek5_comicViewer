import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const UpperNav = Styled.nav`
  width:100%;
  height:74px;
  background-color:#000000;
  font-family: Roboto-BlackItalic;
  font-size: 36px;
  color: #50FF44;
  text-align:center;
  line-height:74px;
`



const NavBar = props => (


  <UpperNav>Comicomic</UpperNav>

)
NavBar.propTypes = {


}

export default NavBar