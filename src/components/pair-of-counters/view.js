import React from "react"
import { forwardTo, view } from "redux-elm"

import Counter from "../counter/view"

export default view(({ model, dispatch }) => {
  console.log("PairCounter")
  console.log(model, dispatch)
  return (
    <div>
      <Counter model={model.topCounter} dispatch={forwardTo(dispatch, "TopCounter")} />
      <Counter model={model.bottomCounter} dispatch={forwardTo(dispatch, "BottomCounter")} />
      <button onClick={() => dispatch({ type: "Reset" })}>RESET</button>
    </div>
  )
})