import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import reducers from './reducers'

import indexRouter from './comics'
import NavBar from './appLevel/navbar'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const theme = {
  mobileOneColumnWidth: '570px',
}

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={appStore}>
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={indexRouter}/>
            <Route path="*" render={()=> <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.querySelector('.container'))
