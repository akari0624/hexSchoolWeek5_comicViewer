import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ArrowButton from './components/ArrowButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GetComicPagesByNameAndChapter } from './actions'
import ImageInComicPageSlider from './components/ImageInComicPagesSlider'

import { Curr_PageImg_ClassName } from './components/ImageInComicPagesSlider'

const ComicDetailPageWrapper = Styled.main`
  width:100%;
`

const ComicCurrentPageArea = Styled.div`
  width:100%;
`

const ComicCurrentPageImageWrapper = Styled.section`

  width:calc(100% - 30px * 2);
  display:inline-block;
  font-size:0;
`

const CurrComicPageImage = Styled.img`
  width:100%;
`


const renderCurrComicPageImage = (pageUrlArr, pageIndex) => {

  if(pageUrlArr.length == 0){
    return <CurrComicPageImage />
  }

  return <CurrComicPageImage src={pageUrlArr[pageIndex]} />
}



const AllPagesSliderWrapper  = Styled.ol`
  
  width:calc(100% - 30px * 2);
  height:200px;
  overflow-x:scroll;
  overflow-y:hidden;
  white-space: nowrap;
`






const renderComicPagesSlider = (comicPagesURLArr, currPageIndex, onClickHandler) => { 

  return comicPagesURLArr.map((url, indexInUrlArr) => (
  
    <ImageInComicPageSlider key={url} imgUrl={url} tIndex={indexInUrlArr} onClickHandler={onClickHandler} isFocus={indexInUrlArr === currPageIndex ? true : false} />

  ))
}

const theFormulaToCountProperScrollLeftPosition = (currPageOffsetLeft, scrollDomWidth, currPageWidth) =>  (currPageOffsetLeft - (scrollDomWidth / 2) - currPageWidth)

const handleAllPagesSliderWrapperScrollLeft = (scrollRef) => {

  const currPageDom = scrollRef.querySelector(`.${Curr_PageImg_ClassName}`)

  const scrollDomWidth = scrollRef.clientWidth
  const currPageOffsetLeft = currPageDom.offsetLeft

  const currPageWidth = currPageDom.clientWidth

    
  scrollRef.scrollLeft = theFormulaToCountProperScrollLeftPosition(currPageOffsetLeft,  scrollDomWidth, currPageWidth)


}

class ComicDetailPage extends Component{

  constructor(props){
    super(props)

    this.state = {
      currPage:0,
    }
  }

  onNextPageClick = (event) => {

    console.log('next')
    if(this.state.currPage === this.props.comicPages.length -1){
      return
    }
    
    let {currPage} = this.state
    const nextIndex = currPage+1
    this.setState({currPage:nextIndex})
  }

  onPreviousPageClick = (event) => {

    if(this.state.currPage === 0){
      return;
    }

    let {currPage} = this.state
    const previousIndex = currPage-1
    this.setState({currPage:previousIndex})
  }

  onImageInSliderClick = (index) => {

    this.setState({currPage:index})
  }

  render(){
    return(
      <React.Fragment>
        <ComicDetailPageWrapper>
          <ComicCurrentPageArea>
            <ArrowButton direction="left"  onClick={this.onPreviousPageClick}/>
            <ComicCurrentPageImageWrapper>
              {renderCurrComicPageImage(this.props.comicPages, this.state.currPage)}
            </ComicCurrentPageImageWrapper>
            <ArrowButton direction="right" onClick={this.onNextPageClick} />
          </ComicCurrentPageArea>
        </ComicDetailPageWrapper>
  
        <AllPagesSliderWrapper innerRef={tRef => this.allPagesSliderWrapperRef = tRef}>
          {renderComicPagesSlider( this.props.comicPages, this.state.currPage, this.onImageInSliderClick )}
        </AllPagesSliderWrapper>
      </React.Fragment>
    )
  }

  componentDidMount(){

    this.props.GetComicPagesByNameAndChapter(null,null)

  }

  componentDidUpdate(){

    handleAllPagesSliderWrapperScrollLeft(this.allPagesSliderWrapperRef)

  }

}


ComicDetailPage.propTypes = {

  comicPages:PropTypes.array.isRequired,
  GetComicPagesByNameAndChapter:PropTypes.func.isRequired,
}

function mapStateToProps({comicPages}){

  return {
    comicPages
  }


}

function mapDispatchToProps(dispatch){


  return bindActionCreators({GetComicPagesByNameAndChapter}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ComicDetailPage)