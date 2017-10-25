import tableListReducers from "../TableList/updater"
import { combineReducers } from "redux"

export default combineReducers({
  counter: (action, iniState) => iniState,
  tableList: tableListReducers
})
