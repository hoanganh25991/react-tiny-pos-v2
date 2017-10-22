import { Updater } from "redux-elm"

import { initialModel as fk } from "../components/pair-of-counters/updater"

import fud from "../components/pair-of-counters/updater"

const initalState = { pair: fk }

export default new Updater(initalState)
  .case("Pair", (model, ...rest) => ({ ...model, pair: fud(model.pair, ...rest) }))
  .toReducer()
