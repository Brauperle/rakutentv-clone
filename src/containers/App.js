import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const store = createStore(
  () => ({}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            'LISTS'
          )} />
          <Route exact path="/:id" render={() => (
            'DETAIL'
          )} />
          <Route path="*" render={() => (
            'Catch all'
          )} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
