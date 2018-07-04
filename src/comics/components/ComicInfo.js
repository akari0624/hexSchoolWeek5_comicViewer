import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const OuttestWrapper = Styled.div`
  width:100%;
  height:100%; 
`

const ComicName = Styled.div`
  font-family: Roboto-Bold;
  font-size: 36px;
  color: #FFFFFF;
  line-height: 52px;
  height:52px;
  background-color:#000000;
  margin-bottom:16px;
  text-align:center;
`

const ComicInfoRowWrapper = Styled.div`
  margin-bottom:8px;
`

const ComicInfoRowPropertyName =  Styled.div`
  font-family: Roboto-Bold;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin-left:15px;
  display:inline-block;
  margin-right:20px;
` 

const ComicInfoRowPropertyValue =  Styled.div`
   font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  display:inline-block;
` 

const ComicInfoSummaryWrapper = Styled.div`
  margin-top:24px;
`

const ComicInfoSummaryPropertyName =  Styled.div`
  font-family: Roboto-Bold;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin-left:15px;
  margin-right:20px;
  margin-bottom:5px;
` 

const ComicInfoSummaryPropertyValue =  Styled.div`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin-left:15px;
  margin-right:20px;
  margin-bottom:5px;
` 





const renderComicInfo = (comicInfoObj) => (

  <React.Fragment>
    <ComicInfoRowWrapper>
      <ComicInfoRowPropertyName>Genres</ComicInfoRowPropertyName>
      <ComicInfoRowPropertyValue>{comicInfoObj.genres}</ComicInfoRowPropertyValue>
    </ComicInfoRowWrapper>
    <ComicInfoRowWrapper>
      <ComicInfoRowPropertyName>Author</ComicInfoRowPropertyName>
      <ComicInfoRowPropertyValue>{comicInfoObj.author}</ComicInfoRowPropertyValue>
    </ComicInfoRowWrapper>
    <ComicInfoRowWrapper>
      <ComicInfoRowPropertyName>Status</ComicInfoRowPropertyName>
      <ComicInfoRowPropertyValue>{comicInfoObj.status}</ComicInfoRowPropertyValue>
    </ComicInfoRowWrapper>
    <ComicInfoRowWrapper>
      <ComicInfoRowPropertyName>Rate</ComicInfoRowPropertyName>
      <ComicInfoRowPropertyValue>{comicInfoObj.rate}</ComicInfoRowPropertyValue>
    </ComicInfoRowWrapper>

    <ComicInfoSummaryWrapper>
      <ComicInfoSummaryPropertyName>Summary</ComicInfoSummaryPropertyName>
      <ComicInfoSummaryPropertyValue>{comicInfoObj.summary}</ComicInfoSummaryPropertyValue>
    </ComicInfoSummaryWrapper> 
  </React.Fragment>  

)


const ComicInfo = props => (

  <OuttestWrapper>
    <ComicName>{props.comicName}</ComicName>
    {renderComicInfo(props.comicInfo)}
  </OuttestWrapper>

)


ComicInfo.propTypes = {

  comicName:PropTypes.string,
  comicInfo:PropTypes.object,
}


export default ComicInfo