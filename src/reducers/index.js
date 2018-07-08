import { combineReducers } from 'redux'
import ComicPafesReducer from '../reducers/comicReducer'
import ChaptersInfoReducer from '../reducers/comicChapterInfoReducer'

const rootReducer = combineReducers({

  comicPages:ComicPafesReducer,
  chaptersInfo:ChaptersInfoReducer
})


export default rootReducer