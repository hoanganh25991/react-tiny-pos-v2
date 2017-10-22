// @flow
import React from "react"

import PairCounter from "./pair-of-counters/view"
import { forwardTo, view } from "redux-elm"

export default view(({ model, dispatch }) => {
  console.log(model)

  const app = model.app

  return (
    <div>
      <h1>Hello world</h1>
      <PairCounter model={app.pair} dispatch={dispatch} />
    </div>
  )
})
