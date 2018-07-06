import { GET_COMIC_BY_COMIC_NAME_AND_CHAPTER } from '../comics/types'


export default (state=[], action) => {


  switch(action.type){

  case GET_COMIC_BY_COMIC_NAME_AND_CHAPTER:
    return action.payload      


  }

  return state


}