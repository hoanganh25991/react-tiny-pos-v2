import { Updater } from "redux-elm"
import { combineReducers } from "redux"

import fud from "../components/pair-of-counters/updater"

export default combineReducers({
  pair: fud
})
