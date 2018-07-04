import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const AllChapterAreaWrapper = Styled.div`
  margin-top:24px;

`

const AllChapterBanner = Styled.div`
  background-color: #000000;
  font-family: Roboto-Bold;
  font-size: 24px;
  color: #FFFFFF;
  text-align:center;
  line-height:44px;
  width:181px;
  height:44px;
`

const AllChapterListArea = Styled.ul`
  background: #FFFFFF;
  border: 4px solid #000000;
  list-style-type: none;
`

const ChapterItem = Styled.li`
  font-family: Roboto-Bold;
  font-size: 16px;
  color: #000000;
  padding:15px 0px 15px 30px;
  
  &:hover{
    background-color:#000000;
    color:#FFFFFF;
  }
`

const renderChapterList = (chapterArr) => {

  if(chapterArr == 0){
    return <ChapterItem key="no_chapter">目前這本漫畫沒有任何章節...</ChapterItem>
  }

  return chapterArr.map(c => (
    <ChapterItem key={c}>{c}</ChapterItem>
  ))

}

const AllChapterArea = props => (

  <AllChapterAreaWrapper>
    <AllChapterBanner>All Chapters</AllChapterBanner>
    <AllChapterListArea>
      {renderChapterList(props.chapters)}
    </AllChapterListArea>
  </AllChapterAreaWrapper>


)
AllChapterArea.propTypes = {

  chapters:PropTypes.array.isRequired,

}


export default AllChapterArea