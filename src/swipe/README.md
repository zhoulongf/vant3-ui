## swipe 组件

### 使用

```javascript
import { Swipe } from '@cm/mobile-ui'
components: {
  [CmmSwipe.name]: Swipe
}
```

### 代码演示

```HTML
  <cmm-swipe
      list="[a, b, c]"
      @change="onChange"
      @click="itemClick"
/>
```

```js
const onChange = (index) => {
  console.log(index);
};

const itemClick = (e, item, index) => {
  console.log(e, item, index);
};
```

## API

### Props

props 自有属性和方法，slots 插槽相关，formDate 上传熟悉比如地址，参数等

| 参数      | 说明                                 | 类型           | 默认值 |
| --------- | ------------------------------------ | -------------- | ------ |
| list      | 展示列表                             | Array / String | []     |
| model     | 展示类型                             | String         | img    |
| separator | 分割符，如有需要，可自定义分割的符号 | String         | ,      |
| options   | vant 原有的配置                      | Object         | {}     |
