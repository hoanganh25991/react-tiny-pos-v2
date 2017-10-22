import { Updater } from "redux-elm"

const initalState = { pair: {} }

export default new Updater(initalState).toReducer()
