import { Updater } from "redux-elm"
import { combineReducers } from "redux"

import fud from "../components/pair-of-counters/updater"

const r = combineReducers({
  pair: fud
})

console.log("reducer", r)

const r2 = combineReducers({
  app: r
})

export default r2
