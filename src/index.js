// CRA
import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"

// Redux
import { Provider, connect } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"

import reducers from "./reducers"

import reduxElm from "redux-elm"

// Sagas
import mySaga from "./sagas"
import createSagaMiddleware from "redux-saga"

// Form react material-ui, this need for onTouchTap event
import injectTapEventPlugin from "react-tap-event-plugin"

// Import Component
import HoiApp from "./containers/HoiApp"

// Import style

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Create store for redux
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

registerServiceWorker()

const storeFactory = compose(reduxElm)(createStore)
const store = storeFactory(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware)))

// Run the saga
sagaMiddleware.run(mySaga)

// Render
ReactDOM.render(
  <Provider store={store}>
    <HoiApp />
  </Provider>,
  document.getElementById("root")
)
