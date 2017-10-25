import getTables from "../../firebase/getTables"

import { Updater } from "redux-elm"
export const FETCH_TABLE = "FETCH_TABLE"

const iniState = {
  tables: []
}

export default new Updater(iniState)
  .case(FETCH_TABLE, (currState, action) => {
    console.log(currState, action, "See your request")
    const { name } = action
    console.log(name, "See name pass")
    getTables()
    return ["Vai luyen chua"]
  })
  .toReducer()
