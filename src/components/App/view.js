import React from "react"
import { view } from "redux-elm"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import createHistory from "history/createBrowserHistory"
import { Router, Route } from "react-router"

import T from "../TableList/view"

const theme = createMuiTheme({
  //My custom option here
})

class App extends React.PureComponent {
  history = createHistory(this.props)

  componentDidMount() {
    console.log("Should push this history into store")
  }

  render() {
    const { model, dispatch } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Router history={this.history}>
          <div>
            <h1>Hello</h1>
            <div>
              <Route exact path={"/"} render={() => <T {...{ model, dispatch }} />} />
              <Route path={"/abc"} render={() => <T {...{ model, dispatch }} />} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default view(({ model, dispatch }) => {
  return <App model={model} dispatch={dispatch} />
})
