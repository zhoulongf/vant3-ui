<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/list/demo/index.vue
 * @Date: 2022-03-17 16:48:44
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-17 16:58:18
 * @Description:
-->
<script>
import cmList from '../index'

export default {
  name: 'ListDemo',
  components: { cmList },
  setup() {
    const getList = ({ pageIndex }) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (pageIndex === 3) {
            reject(new Error('失败'))
          } else {
            const list = []

            for (let i = 0; i < 10; i++) {
              list.push({
                pageIndex,
                index: i
              })
            }

            resolve({
              list,
              count: 25
            })
          }
        }, 1000)
      })
    return { getList }
  }
}
</script>
<template>
  <demo-section>
    <demo-block title="基础用法">
      <cm-list :get-list="getList">
        <!--   列表数据      -->
        <template #list="{ list }">
          <div
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="list-cell">
              子元素{{ item.pageIndex }}-{{ item.index }}
            </div>
          </div>
        </template>
      </cm-list>
    </demo-block>
  </demo-section>
</template>
<style>
.list-cell {
  text-align: center;
  height: 100px;
  line-height: 100px;
  background-color: #dedede;
  margin: 8px 0;
}
</style>
