<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/docs/quickstart.md
 * @Date: 2022-03-17 11:27:27
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 14:48:55
 * @Description:
-->

# 快速上手

## 安装

### 注意

本包基于`vant`二次开发，请自行安装`vant`并引入

### 方式一. 自动按需引入组件（推荐）

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 接着你可以在代码中直接引入 @cm/cm-mobile-ui 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Form } from '@cm/cm-mobile-ui';
```

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```js
import Form from '@cm/mobile-ui/lib/form';
import '@cm/mobile-ui/lib/form/style';
```

### 方式三. 导入所有组件

@cm/cm-mobile-ui 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
import { createApp } from 'vue';
const app = createApp(App);
import CMMUi from '@cm/mobile-ui';

app.use(CMMUi);
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。
