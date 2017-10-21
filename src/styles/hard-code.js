import * as f from "./flex"
import { cyan50, cyan100, cyan600, grey50, grey100, grey200, grey300 } from "material-ui/styles/colors"
// Height
export const height32 = { height: 40 }
export const height500 = { height: 500 }
export const height300 = { height: 300 }
export const heightFull = { height: "100%" }
export const height90vh = { height: "90vh" }
export const heightInherit = { height: "inherit" }
export const heightAuto = { height: "auto" }
export const height37 = { height: 37 }
export const heightMin37 = { minHeight: 37 }
export const height100vh = { height: "100vh" }

// Width
export const widthFull = { width: "100%" }
export const width30vw = { width: "30vw" }
export const width80Per = { width: "80%" }
export const width20Per = { width: "20%" }
export const widthAuto = { width: "auto" }
export const widthMinAuto = { minWidth: "auto" }
export const widthMax40 = { maxWidth: 40 }
export const width40 = { width: 40 }
export const width20 = { width: 20 }
export const width75 = { width: 75 }
export const widthMin40 = { minWidth: 40 }
export const widthMin55 = { minWidth: 55 }
export const widthMin65 = { minWidth: 65 }
export const widthMin110 = { minWidth: 110 }
export const widthMin130 = { minWidth: 130 }
export const widthMin140 = { minWidth: 140 }
export const widthMin185 = { minWidth: 185 }

export const minWidthInherit = { minWidth: "inherit" }

// width height
export const widthHeightAuto = { ...widthAuto, ...heightAuto }
// Padding
export const padding10 = { padding: 10 }
export const padding0 = { padding: 0 }
export const padding5 = { padding: 5 }
export const paddingLR5 = { padding: "0 5px" }
export const padding8 = { padding: 8 }
export const paddingLR10 = { padding: "0 10px" }
export const paddingTB10 = { padding: "10px 0" }

// Margin
export const marginL0 = { marginLeft: 0 }
export const marginT0 = { marginTop: 0 }
export const margin0 = { margin: 0 }
export const margin2 = { margin: 2 }
export const marginLR10 = { margin: "0 10px" }
export const margin10 = { margin: 10 }
export const marginL10 = { marginLeft: 10 }
export const marginT10 = { marginTop: 10 }
export const marginT15 = { marginTop: 15 }
export const marginL15 = { marginLeft: 15 }
export const marginB10 = { marginBottom: 10 }
export const marginMinusB10 = { marginBottom: -10 }
export const margin12 = { margin: 12 }

// Position
export const positionFixed = { position: "fixed" }
export const inline = { display: "inline-block" }
export const block = { display: "block" }
// Display table helps text not forced wrap
export const displayTable = { display: "table" }
export const notWrapText = { whiteSpace: "nowrap" }

// Stufff
export const scrollY = { overflowY: "auto", overflowX: "hidden" }
export const scrollHidden = { overflow: "hidden" }
export const hiddenX = { overflowX: "auto", overflowY: "hidden" }

export const cursorHand = { cursor: "pointer", userSelect: "none" }

export const unSelect = { userSelect: "none" }

export const devBorder = { border: `1px solid black` }
export const borderSolid = { border: `1px solid ${grey100}` }

export const devBorder2 = { border: "1px solid black", padding: 10, margin: 10 }
export const border0 = { border: 0 }
export const boxShadowNone = { boxShadow: "none" }
export const borderCircle = { borderRadius: "50%" }
export const boxSizing = { boxSizing: "border-box" }

// Font size
export const fontDot5 = { fontSize: "0.5em" }
export const fontDot8 = { fontSize: "0.8em" }
export const font1d2 = { fontSize: "1.2em" }
export const font2 = { fontSize: "2em" }
export const font1 = { fontSize: "1em" }
export const fontBold = { fontWeight: "bold" }
export const fontNormal = { fontWeight: "normal" }
export const font200Per = { fontSize: "200%" }
export const font16px = { fontSize: "16px" }

// Background color
export const backgroundCyan50 = { backgroundColor: cyan50 }
export const backgroundCyan100 = { backgroundColor: cyan100 }
export const backgroundCyan600 = { backgroundColor: cyan600 }
export const background424242 = { backgroundColor: "#424242" }
export const backgroundNone = { backgroundColor: "none" }
export const backgroundBlack = { backgroundColor: "black" }
export const backgroundWhite = { backgroundColor: "white" }
export const backgroundGrey50 = { backgroundColor: grey50 }
export const backgroundGrey100 = { backgroundColor: grey100 }
export const backgroundGrey200 = { backgroundColor: grey200 }
export const backgroundGrey300 = { backgroundColor: grey300 }
// Color
export const colorWhite = { color: "white" }
export const colorBlack = { color: "black" }
//---------------------------------
// Text Align
//---------------------------------
export const textRight = { textAlign: "right" }
export const textLeft = { textAlign: "left" }
export const textCenter = { textAlign: "center" }
export const textMuted = { color: "#777" }
// From debug
// export const
/////////////////////////

//---------------------------------
// Style
//---------------------------------
export const table = { width: "30%", ...f.displayFlex }

export const squareTable = {
  height: 100,
  width: 100,
  margin: 10
}

export const smallSquareTable = {
  height: "5vh",
  width: "5vh",
  margin: 10,
  minWidth: 60,
  minHeight: 60
}

export const toast = { ...widthFull, ...f.flexRow, ...f.flexContentCenter }

export const tableInCreateOrder = { width: "10%", margin: 5, maxWidth: 50 }

//---------------------------------
// Main div
//---------------------------------
export const mainDiv = {
  padding: 10,
  marginTop: 10
}

//---------------------------------
// Item control panel
//---------------------------------
export const itemAddUp = {
  width: 36,
  borderRadius: 18,
  minWidth: "auto"
}

export const addBtnStyle = {
  position: "fixed",
  right: "5%",
  bottom: "10%"
}

export const zIndex1 = {
  zIndex: 1
}

//---------------------------------
// Order Kitchen
//---------------------------------
// export const kitchenFont = {
//   "@media (min-width: 1023px)": {
//     fontSize: "190%"
//   }
// }
export const kitchenFont = {}

export const preventTouchAction = { touchAction: "none" }

const _width200 = "36px"
export const largeIconCheckBox = {
  width: _width200,
  height: _width200
}

export const paperStyle = {
  color: "rgba(0, 0, 0, 0.87)",
  backgroundColor: "rgb(255, 255, 255)",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  boxSizing: "border-box",
  fontFamily: "Roboto, sans-serif",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
  borderRadius: "2px",
  margin: "10px 2px 2px"
}

export const rowHeight = {
  ...heightMin37,
  ...height37
}

export const materialTransition = {
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
}

export const billTemplatePosition = {
  position: "fixed",
  top: "-100vh"
}

export const fullScreen = { width: "100vw", height: "100vh" }
export const noAutoComplete = { name: "notPassword" }
