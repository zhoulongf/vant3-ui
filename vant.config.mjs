/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/vant.config.mjs
 * @Date: 2022-03-17 11:27:27
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-22 10:24:14
 * @Description:
 */
export default {
  name: 'mobile-ui',
  build: {
    css: {
      preprocessor: 'less'
    },
    site: {
      publicPath: './'
    },
    vetur: {
      tagPrefix: 'cmm-'
    }
  },
  site: {
    title: 'mobile-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'list',
            title: 'List列表'
          },
          {
            path: 'form',
            title: 'form表单'
          },
          {
            path: 'uploader',
            title: '上传组件'
          },
          {
            path: 'swipe',
            title: '轮播'
          },
        ]
      }
    ]
  },
  css: {
    requireModuleExtension: true
  }
}
