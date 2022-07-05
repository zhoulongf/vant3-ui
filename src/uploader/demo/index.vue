<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/uploader/demo/index.vue
 * @Date: 2022-03-22 10:21:51
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 11:42:37
 * @Description:
-->
<template>
  <div class="demo">
    <uploader1
      v-model:value="ids"
      :data="uploadForm"
    />
    <van-button
      round
      block
      type="primary"
      @click="aaaa"
    >
      提交
    </van-button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Button, Uploader } from 'vant'
import uploader1 from '..'
import 'vant/lib/index.css'
export default {
  name: 'DemoUploader',
  components: {
    uploader1,
    [Uploader.name]: Uploader,
    [Button.name]: Button
  },
  setup() {
    const ids = ref([])
    const fills = ref([])
    const uploadForm = ref({
      props: {
        multiple: true,
        accept: 'image/*',
        maxCount: 2,
        afterRead: (value) => {
          console.log(value)
        },
        delete: (value) => {
          console.log(value)
        },
        beforeRead: () => {
          return true
        }
      },
      // slots: {
      //   default: () => { return h('div', '自定义显示') }
      // },
      formDate: {
        data: {
          userId: 2132
        }
      }
    })
    const aaaa = () => {
      console.log('ids', ids.value)
    }
    return { ids, aaaa, uploadForm, fills }
  }
}
</script>
<style>
.demo {
  background-color: #fff;
  padding: 10px;
}
</style>
