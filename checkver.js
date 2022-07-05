/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/checkver.js
 * @Date: 2022-03-21 10:22:00
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-21 10:22:01
 * @Description:
 */
const semver = require('semver')
const { engines } = require('./package')
const version = engines.node
console.log(version)
if (!semver.satisfies(process.version, version)) {
  console.error(`请检查您的node版本,${version},got:${process.version}`)
  process.exit(1)
}
