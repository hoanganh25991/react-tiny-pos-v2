import React from "react"
import { view } from "redux-elm"

import {FETCH_TABLE} from "./updater";

class TableList extends React.PureComponent {
  componentDidMount(){
    console.log("Ok, give me all tables we have")
    const {dispatch} = this.props
    dispatch({type: FETCH_TABLE, name: "AnhLeHoang"})
  }


  render() {
    const { model, dispatch } = this.props

    return (
      <div>
        <h1>TableList</h1>
      </div>
    )
  }
}

export default view(({ model, dispatch }) => {
  return <TableList {...{ model, dispatch }} />
})
