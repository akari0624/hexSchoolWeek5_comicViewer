import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import reducers from './reducers'

import ComicInfoPage from './comics/ComicInfoPage'
import NavBar from './appLevel/navbar'
import ComicDetailPage from './comics/ComicDetailPage'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const theme = {
  mobileOneColumnWidth: '570px',
}

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path="/comicpage" component={ComicDetailPage} />
            <Route path="/" component={ComicInfoPage}/>
            <Route path="*" render={()=> <Redirect to="/" />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.querySelector('.container'))
