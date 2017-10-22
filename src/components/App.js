// @flow
import React from "react"

import PairCounter from "./pair-of-counters/view"
import { forwardTo, view } from "redux-elm"

export default view(({ model, dispatch }) => {
  console.log(model, dispatch)

  return (
    <div>
      <h1>Hello world</h1>
      <PairCounter model={model.pair} dispatch={forwardTo(dispatch, "Pair")} />
    </div>
  )
})
