import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import RouterMap from './router/RouterMap'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
