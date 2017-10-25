import getTables from "../../firebase/getTables"

import { Updater } from "redux-elm"
export const FETCH_TABLE = "FETCH_TABLE"
export const UPDATE_TABLES = "UPDATE_TABLES"

const iniState = {
  tables: []
}

export const fetchTables = () => dispatch => {
  const waitForGetTables = getTables()
  waitForGetTables.then(tables => dispatch({ type: UPDATE_TABLES, tables }))
}

export default new Updater(iniState)
  .case(UPDATE_TABLES, (currState, action) => {
    const { tables } = action
    return tables
  })
  .case(FETCH_TABLE, (currState, action) => {
    console.log(currState, action, "See your request")
    const { name } = action
    console.log(name, "See name pass")
  })
  .toReducer()
