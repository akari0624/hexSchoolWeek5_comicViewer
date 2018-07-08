import { GET_COMIC_CHAPTER_INFO_BY_COMIC_NAME } from '../comics/types'


export default (state=[], action) => {

  switch(action.type){
  
  case GET_COMIC_CHAPTER_INFO_BY_COMIC_NAME:
    
    return action.payload

  }

  return state
}