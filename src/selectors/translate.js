import * as c from "../actions/actionTypes"
import * as color from "material-ui/styles/colors"

/**
 * Translate order status from number
 * @type {{}}
 */
export const orderStatusName = {
  [c.ORDER_CANCELLED]: "cancelled",
  [c.ORDER_CREATED]: "process",
  [c.ORDER_EDITTING]: "editting",
  [c.ORDER_SENT_TO_KITCHEN]: "sent to kitchen",
  [c.ORDER_PREPARING]: "preparing",
  [c.ORDER_PREPARED]: "cooked",
  [c.ORDER_ON_TABLE]: "on table",
  [c.ORDER_FINISHED]: "paid"
}

/**
 * Translate path name for title
 * @type {{}}
 */
export const pathName = {
  [c.PATH_HOME]: "Bàn",
  [c.PATH_ORDER_CREATE]: "Tạo Order",
  [c.PATH_ORDER_DETAILS]: "Chi tiết order",
  [c.PATH_ORDER_KITCHEN]: "Nhà bếp",
  [c.PATH_ORDER_LIST]: "Danh sách order",
  [c.PATH_SETTINGS]: "Settings",
  [c.PATH_TABLE_DETAILS]: "Bàn > Chi tiết",
  [c.PATH_TABLE_LIST]: "Bàn",
  [c.PATH_ORDER_EDIT]: "Thêm món",
  [c.PATH_TAKE_AWAY]: "Take Away",
  [c.PATH_TAKE_AWAY_DETAILS]: "Chi tiết order"
}

/**
 * Translate kitchen type
 * @type {Object}
 */
export const kitchenTypeName = {
  0: "Món Ăn",
  100: "Nước Uống"
}

/**
 * Translate order status into color
 * @type {Object}
 */
export const orderStatusColor = {
  [c.ORDER_CANCELLED]: color.pink300,
  [c.ORDER_CREATED]: color.yellow400,
  [c.ORDER_EDITTING]: color.yellow400,
  [c.ORDER_SENT_TO_KITCHEN]: color.yellow400,
  [c.ORDER_PREPARING]: color.green200,
  [c.ORDER_PREPARED]: color.green500,
  [c.ORDER_ON_TABLE]: color.blue500,
  [c.ORDER_FINISHED]: color.white
}
