import React from "react"
import { view } from "redux-elm"

import {fetchTables} from "./updater";

class TableList extends React.PureComponent {
  componentDidMount(){
    console.log("Ok, give me all tables we have")
    const {dispatch} = this.props
    dispatch(fetchTables())
  }

  hello = () => console.log("Say hi")

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
