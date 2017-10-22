import React from "react"
import { view } from "redux-elm"

const countStyle = {
  fontSize: "20px",
  fontFamily: "monospace",
  display: "inline-block",
  width: "50px",
  textAlign: "center"
}

class Counter extends React.PureComponent {
  componentDidMount() {
    console.log("Counter did mount")
  }

  render() {
    const { model, dispatch } = this.props

    return (
      <div>
        <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
        <div style={countStyle}>{model}</div>
        <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      </div>
    )
  }
}

export default view(({ model, dispatch }) => {
  console.log("Counter", model)
  return <Counter model={model} dispatch={dispatch} />
})
