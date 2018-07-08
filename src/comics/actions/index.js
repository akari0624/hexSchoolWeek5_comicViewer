import { GET_COMIC_BY_COMIC_NAME_AND_CHAPTER, GET_COMIC_CHAPTER_INFO_BY_COMIC_NAME } from '../types'
import page01 from '../../../static/img/storyboard-1.png'
import page02 from '../../../static/img/storyboard-2.png'
import page03 from '../../../static/img/storyboard-3.png'
import page04 from '../../../static/img/storyboard-4.png'
import page05 from '../../../static/img/storyboard-5.png'
import page06 from '../../../static/img/storyboard-6.png'
import page07 from '../../../static/img/storyboard-7.png'
import page08 from '../../../static/img/storyboard-8.png'
import page09 from '../../../static/img/storyboard-9.png'
import page10 from '../../../static/img/storyboard-10.png'
import page11 from '../../../static/img/storyboard-11.png'
import page12 from '../../../static/img/storyboard-12.png'


const  comicPagesURLs = [page01,page02,page03,page04,page05,page06,page07,page08,page09,page10,
  page11,page12
]

const comicChapterInfo = ['Chapter 1: The F2E Challenge Start!', 'Chapter 2: Todo List is Going Crazy!']

export const GetComicPagesByNameAndChapter = (name, chapter) => {

  return {
    type:GET_COMIC_BY_COMIC_NAME_AND_CHAPTER,
    payload:comicPagesURLs,
  }

}


export const GetChapterInfoOfThisComic = (comicName) => {

  return {
    type:GET_COMIC_CHAPTER_INFO_BY_COMIC_NAME,
    payload:comicChapterInfo
  }

}