<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/list/README.md
 * @Date: 2022-03-17 16:47:58
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-17 16:51:28
 * @Description:
-->

# List 列表

### 介绍

List 是一个基于`vant/pullrefresh`、`vant/list`二次封装的业务组件，封装了数据请求逻辑（包含空数据、下一页、网络异常判断）

### 使用场景

常用语列表页、查询列表页、包含 tab 标签组的列表等

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础用法">
      <cm-list :get-list="getList">
        <!--   列表数据      -->
        <template #list="{ list }">
          <div v-for="(item, index) in list" :key="index">
            <div class="list-cell">
              子元素{{ item.pageIndex }}-{{ item.index }}
            </div>
          </div>
        </template>
      </cm-list>
    </demo-block>
  </demo-section>
</template>
```

```javascript
export default {
  components: { cmList },
  setup() {
    const getList = ({ pageIndex }) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (pageIndex === 3) {
            reject(new Error('失败'));
          } else {
            const list = [];

            for (let i = 0; i < 10; i++) {
              list.push({
                pageIndex,
                index: i,
              });
            }

            resolve({
              list,
              count: 25,
            });
          }
        }, 1000);
      });
    return { getList };
  },
};
```

## API

### Props

| 参数       | 说明                                | 类型                                                  | 默认值                 |
| ---------- | ----------------------------------- | ----------------------------------------------------- | ---------------------- |
| autoLoad   | 是否自动请求数据                    | _boolean_                                             | `true`                 |
| getList    | 数据获取方法，返回一个 promise 对象 | _Function< { pageIndex: Number, pageSize: Number } >_ | -                      |
| emptyText  | 空数据提示文字                      | _string_                                              | 暂无数据               |
| noMoreText | 没有下一页提示文字                  | _string_                                              | 没有更多了             |
| errorText  | 数据请求异常提示文字                | _string_                                              | 请求失败，点击重新加载 |

### Slot

| 名称  | 说明         | 参数            |
| ----- | ------------ | --------------- |
| list  | 数据列表插槽 | { list: Array } |
| empty | 空数据插槽   | -               |

### 方法

| 名称      | 说明                    | 参数 |
| --------- | ----------------------- | ---- |
| resetPage | 重置刷新数据,刷新第一页 | -    |
