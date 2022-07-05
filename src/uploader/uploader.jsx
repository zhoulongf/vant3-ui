/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/uploader/uploader.jsx
 * @Date: 2022-03-22 10:03:25
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 11:42:06
 * @Description:
 */
import { reactive, onBeforeMount } from 'vue'
import { Uploader, Toast } from 'vant'
import { isNull } from '../utils/utils'
import request from './utils/ajax'
export default {
  name: 'UpLoader',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const state = reactive({
      innerFiles: [],
      files: []
    })
    onBeforeMount(() => {
      if (!isNull(props?.data?.props?.fileList)) {
        state.innerFiles = props.data.props.fileList.map(v => {
          return {
            url: v,
            id: v.id,
            message: '',
            status: 'done'
          }
        })
      }
      if (!isNull(props?.data?.props?.ids)) {
        state.files = props.data.props.ids.split(',')
      }
    })
    // 文件大小超过限制时触发
    const oversize = (file) => {
      console.info(file)
      if (props?.data?.props?.maxSize) {
        Toast.fail(`文件大小在${props?.data?.props?.maxSize}M内`)
      }
      props?.data?.props?.onOversize?.()
    }
    // 上传之前的判断交给使用者自己判断
    // const handleBeforeRead = (file) => {
    //   props?.data?.props?.beforeRead(file)
    //   // eslint-disable-next-line eqeqeq
    //   if (props?.data?.props.accept && file.type != props?.data?.props?.accept) {
    //     Toast('请上传 jpg 格式图片')
    //     return false
    //   }
    //   return true
    // }
    // 上传之后
    const handleAfterRead = (file, { name, index }) => {
      file.status = 'uploading'
      file.message = '上传中...'
      uploadAxios(file, name, index).then(() => {
        // 重写上传之后的方法
        emit('update:value', state.files)
        props?.data?.props?.afterRead?.(state)
      })
    }
    // 删除
    const handleDelete = (file, detail) => {
      state.innerFiles.splice(detail.index, 1)
      state.files.splice(detail.index, 1)
      emit('update:value', state.files)
      // // 重写删除方法
      props?.data?.props?.delete?.({ file, detail })
    }
    const uploadAxios = (file, name, index) => {
      return new Promise((resolve) => {
        const formData = new FormData()
        formData.set('file', file.file)
        formData.set('name', props?.data?.props?.name || name)
        const formType = props?.data?.formDate?.formType
        if (formType) {
          for (const key in formType) {
            formData.set(key, formType[key])
          }
        }
        const postUrl = props?.data?.formDate?.uploadAction || 'http://10.10.77.223:9083/cityai/common/uploadAndCompress'
        request(postUrl, formData).then(({ success, data }) => {
          if (success) {
            file.message = '上传成功'
            file.status = 'success'
            file.id = data
            state.files.push(data)
          } else {
            file.message = '上传失败'
            file.status = 'failed'
            Toast({
              message: '图片上传服务失败'
            })
            state.innerFiles.splice(index, 1)
          }
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    }
    return () => {
      console.log(props?.data?.props)
      const multiple = props?.data?.props?.multiple || false
      let maxCount = props?.data?.props?.maxCount || 3
      if (!multiple) {
        maxCount = 1
      }
      const upLoadProps = {
        ...props?.data?.props,
        maxCount,
        afterRead: handleAfterRead,
        // beforeRead: handleBeforeRead,
        beforeDelete: handleDelete,
        onOversize: oversize
      }
      return <Uploader {...upLoadProps} v-slots={props.data?.slots} v-model={state.innerFiles} />
    }
  }
}
