// @flow
import { connect } from "react-redux"
import App from "../components/App"

const mapStateToProps = appState => ({ model: appState })

export default connect(mapStateToProps, null)(App)
