/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/uploader/utils/ajax.js
 * @Date: 2022-03-22 14:29:49
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-22 17:30:40
 * @Description:
 */
import axios from 'axios'
export default function request(url, data) {
  return new Promise((resolve) => {
    axios
      .post(url, data, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        console.info(err)
        resolve()
      })
  })
}
