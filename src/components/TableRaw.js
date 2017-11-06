import React from "react"

export default class TableRaw extends React.PureComponent {
  componentDidMount() {}

  hello = () => console.log("Say hi")

  render() {
    return (
      <div>
        <h1>TableRaw</h1>
      </div>
    )
  }
}
