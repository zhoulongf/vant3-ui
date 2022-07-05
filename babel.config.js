/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/babel.config.js
 * @Date: 2022-03-17 11:34:35
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-18 11:08:16
 * @Description:
 */
module.exports = {
  // presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: '@cm/mobile-ui',
        libraryDirectory: 'es',
        style: true
      },
      '@cm/mobile-ui'
    ]
  ]
}
