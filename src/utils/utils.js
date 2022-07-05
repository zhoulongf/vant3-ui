/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/utils/utils.js
 * @Date: 2022-03-21 11:22:32
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-21 19:50:00
 * @Description:
 */
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export function isNull(val = null) {
  if (val && val !== null && val !== '' && val !== undefined) {
    return false
  }
  return true
}
export function formatDate(date, valueFormat) {
  date = isNull(date) ? new Date() : date
  return moment(date).format(valueFormat)
}

export function momDefaultTime(date = null, valueFormat = 'yyyy-MM-DD') {
  date = isNull(date) ? new Date() : date
  return moment(date).format(valueFormat)
}

export function hourMinute(date, valueFormat = ':') {
  return `${moment(date).get('hour')}${valueFormat}${moment(date).get(
    'minute'
  )}`
}

export function getType(data) {
  return Object.prototype.toString.call(data).split(' ')[1].split(']')[0]
}
