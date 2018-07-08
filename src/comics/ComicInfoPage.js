import React from 'react'
import Styled from 'styled-components'
import coverImage from '../../static/img/comic_cover.png' 
import ComicInfo from './components/ComicInfo'
import AllChapterArea from './components/AllChapterArea'

const OuttestWrapper = Styled.main`
  width:100vw;
  height:calc(100% - 74px );
  background-color:#FFFFFF;
`



const UpperComicInfoArea = Styled.section`
  width:calc(100% - 60px);
  display:flex;
  flex-wrap:wrap;
  margin:30px;
`

const LeftComicCoverImageWrapper = Styled.div`
  width:50%;
  height:500px;
  border: 4px solid #000000;
  display:flex;
  justify-content:center;
    @media(max-width:${props => props.theme.mobileOneColumnWidth}){
    width:100%;
    }

`

const ComicCoverImage = Styled.img`
 
  max-width:700px;
  height:100%;
`

const RightComicInfoArea = Styled.div`
  width:50%;
  height:500px;

    @media(max-width:${props => props.theme.mobileOneColumnWidth}){
    width:100%;
    }
`

export default(props) => {

  const fakeComicInfo = {
    comicName:'MY HEXSCHOOL',
    comicInfo:{
      author:'NAMAE SHIRANAI',
      genres:'Fusce/vehicula/dolor',
      status:'Ongoing',
      rate:4,
      summary:'If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.\n Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.',
      chapters:['Chapter 1: The F2E Challenge Start!', 'Chapter 2: Todo List is Going Crazy!'],
    }
  }

  return (
    <OuttestWrapper>
      <UpperComicInfoArea>
        <LeftComicCoverImageWrapper>
          <ComicCoverImage src={coverImage} />
        </LeftComicCoverImageWrapper>
        <RightComicInfoArea>

          <ComicInfo {...fakeComicInfo}/>

        </RightComicInfoArea>
      </UpperComicInfoArea>

      <AllChapterArea chapters={fakeComicInfo.comicInfo.chapters}/>
    </OuttestWrapper>
  )

}
