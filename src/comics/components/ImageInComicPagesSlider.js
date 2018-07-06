import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const ImageWrap_li = Styled.li`
  height:100%;
  display:inline;
`

const ImageWrapCruuPage_li = Styled.li`
  height:100%;
  display:inline-block;
  border:5px solid green;
`

const SmallComicPageInSlider = Styled.img`
  display:inline-block;
  height:100%;
`


export const Curr_PageImg_ClassName = 'currPageImg'


const ImageInComicPageSlider = props => {

  const { imgUrl, tIndex, onClickHandler, isFocus} = props

  const handleClick = () => {

    onClickHandler(tIndex)
  }


  if(isFocus){
    return (
      <ImageWrapCruuPage_li  className={Curr_PageImg_ClassName} onClick={handleClick}><SmallComicPageInSlider  src={imgUrl} /></ImageWrapCruuPage_li>
    )
  }
  return (<ImageWrap_li><SmallComicPageInSlider  src={imgUrl} onClick={handleClick} /></ImageWrap_li>)



}


ImageInComicPageSlider.propTypes = {

  imgUrl:PropTypes.string.isRequired,
  tIndex:PropTypes.number.isRequired,
  onClickHandler:PropTypes.func,
  isFocus:PropTypes.bool.isRequired,
}

export default ImageInComicPageSlider