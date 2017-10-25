import React from "react"
import { view } from "redux-elm"

class TableList extends React.PureComponent {
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
