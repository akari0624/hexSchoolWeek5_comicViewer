import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const StyleConfigInThisComponent = {

  triangleWidth:10,
  currPageBorderWidth:5,
  currPageBorderColor:'green',
}


const ImageWrap_li = Styled.li`
  position:relative
  height:100%;
  display:inline-block;
`

const ImageWrapCruuPage_li = Styled.li`
  position:relative;
  height:100%;
  display:inline-block;
  border:${`${StyleConfigInThisComponent.currPageBorderWidth}px solid ${StyleConfigInThisComponent.currPageBorderColor}`};
`

const CurrPageTriangle = Styled.div`
  position:absolute;
  top:${`-${StyleConfigInThisComponent.triangleWidth * 2.5}px`};
  left:${`calc(50% - ${StyleConfigInThisComponent.triangleWidth}px );`},
  width:0;
  height:0;
  border-color:${`transparent transparent ${StyleConfigInThisComponent.currPageBorderColor} transparent`};
  border-width:${`${StyleConfigInThisComponent.triangleWidth}px`}; 
  border-style:solid;

`

const PageNumberInidicator = Styled.div`
  position:absolute;
  top:-5px;
  left:48%;
  height:10px;
`

const SmallComicPageInSlider = Styled.img`
  display:block;
  height:calc(100% - 10px);
`


export const Curr_PageImg_ClassName = 'currPageImg'


const ImageInComicPageSlider = props => {

  const { imgUrl, tIndex, onClickHandler, isFocus} = props

  const handleClick = () => {

    onClickHandler(tIndex)
  }


  if(isFocus){
    return (
      <ImageWrapCruuPage_li  className={Curr_PageImg_ClassName} onClick={handleClick}>
        <CurrPageTriangle />
        <SmallComicPageInSlider  src={imgUrl} />
      </ImageWrapCruuPage_li>
    )
  }
  return (
    <ImageWrap_li>
      <PageNumberInidicator>{tIndex+1}</PageNumberInidicator>
      <SmallComicPageInSlider  src={imgUrl} onClick={handleClick} />
    </ImageWrap_li>)



}


ImageInComicPageSlider.propTypes = {

  imgUrl:PropTypes.string.isRequired,
  tIndex:PropTypes.number.isRequired,
  onClickHandler:PropTypes.func,
  isFocus:PropTypes.bool.isRequired,
}

export default ImageInComicPageSlider