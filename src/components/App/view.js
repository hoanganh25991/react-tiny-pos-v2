import React from "react"
import { view } from "redux-elm"
import "typeface-roboto"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"

const theme = createMuiTheme({
  //My custom option here
})

class App extends React.PureComponent {
  componentDidMount() {
    console.log("Counter did mount")
  }

  render() {
    const { model, dispatch } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <h1>Hello</h1>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default view(({ model, dispatch }) => {
  return <App model={model} dispatch={dispatch} />
})
