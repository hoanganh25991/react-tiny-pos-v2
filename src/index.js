import React from "react"
import ReactDOM from "react-dom"
import reduxElm from "redux-elm"
import App from "./components/App/view"
import thunkMiddleware from "redux-thunk"
import { connect, Provider } from "react-redux"
import reducers from "./components/App/updater"
import { applyMiddleware, compose, createStore } from "redux"
import registerServiceWorker from "./registerServiceWorker"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const storeFactory = compose(reduxElm)(createStore)
const store = storeFactory(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
const ConnectedApp = connect(state => ({ model: state }), null)(App)

registerServiceWorker()

// Render
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
)
