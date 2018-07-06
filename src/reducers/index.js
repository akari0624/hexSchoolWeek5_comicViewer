import { combineReducers } from 'redux'
import ComicPafesReducer from '../reducers/comicReducer'

const rootReducer = combineReducers({

  comicPages:ComicPafesReducer
})


export default rootReducer