<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/uploader/README.md
 * @Date: 2022-03-22 10:22:02
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 14:36:09
 * @Description:
-->

## uploader 组件

### 使用

```javascript
import {Uploader } from '@cm/mobile-ui'
components: {
  [Uploader.name]: Uploader
}
```

### 代码演示

```HTML
 <cmm-uploader
      v-model:value="ids"
      :data="uploadForm"
    />
```

```js
const uploadForm = ref({
  props: {
    multiple: true,
    accept: 'image/*',
    maxCount: 2,
    afterRead: (value) => {
      console.log(value);
    },
    delete: (value) => {
      console.log(value);
    },
    beforeRead: () => {
      return true;
    },
  },
  // slots: {
  //   default: () => { return h('div', '自定义显示') }
  // },
  formDate: {
    data: {
      userId: 2132,
    },
  },
});
return { uploadForm };
```

## API

### Props

props 自有属性和方法，slots 插槽相关，formDate 上传熟悉比如地址，参数等

| 参数       | 说明                     | 类型           | 默认值                         |
| ---------- | ------------------------ | -------------- | ------------------------------ |
| v-model    | 已上传的文件列表         | FileListItem[] | []                             |
| accept     | 允许上传的文件类型       | string         | image/\*                       |
| after-read | 文件读取完成后的回调函数 | Function       | innerFiles[] 文件、files:ids[] |

### formDate

| 参数         | 说明                           | 类型   | 默认值                                                               |
| ------------ | ------------------------------ | ------ | -------------------------------------------------------------------- |
| uploadAction | 请求接口（post 请求）          | string | [点击查看](http://10.10.77.223:9083/cityai/common/uploadAndCompress) |
| data         | 接口需要的参数或者文件相关属性 | Object | {}                                                                   |

### Slots

自定义

### 更新点

- 重写 oversize 方法，返回的结果与原来一样
- 重写 delete 方法，返回的结果与原来一样
- 重写 after-read 方法，通过接口处理数据，返回图片列表 innerFiles[]和对应的 files[]
- accept 的校验交给了使用者，可以在 before-read 方法进行处理
- vant3 的 multiple 属性不起作用，根据 max-count 进行重写，如果 multiple 为 false，max-count 默认为 1。multiple 为 ture，max-count 默认为 3，如使用者定义了改值，进行读取覆盖
- slots 方法使用者可以完全自定义

### 计划下次迭代点

- 是否需要水印
- 是否需要压缩
