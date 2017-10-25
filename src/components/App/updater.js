import { combineReducers } from "redux"
import counterReducers from "../counter/updater"

export default combineReducers({
  counter: counterReducers
})
