/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/render/area.jsx
 * @Date: 2022-03-23 11:32:11
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 10:54:50
 * @Description:
 */
import { ref, onBeforeMount } from 'vue'
import { Field, Popup, Area } from 'vant'
import { areaList } from '@vant/area-data'
export default {
  name: 'CMArea',
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
    const currentValue = props.data?.currentValue || null
    const areaText = ref('')
    const areaValue = ref('')
    const popupVisible = ref(false)
    onBeforeMount(() => {
      // 获得省市区中文
      if (currentValue) {
        areaValue.value = currentValue
        areaText.value = getArea(currentValue.split(''))
      }
    })
    const getArea = (area) => {
      let arr = []
      if (area[5] !== '0') { // 区
        arr = [
          areaList['province_list'][`${currentValue.substring(0, 2)}0000`],
          areaList['city_list'][`${currentValue.substring(0, 4)}00`],
          areaList['county_list'][`${currentValue}`]
        ]
      } else if (area[3] !== '0' && area[5] === '0') { // 市
        arr = [
          areaList['province_list'][`${currentValue.substring(0, 2)}0000`],
          areaList['city_list'][`${currentValue}`]
        ]
      } else if (area[3] === '0') { // 省
        arr = [
          areaList['province_list'][`${currentValue}`]
        ]
      }
      return arr.join('/')
    }
    const areaConfim = (params) => {
      let key = -1
      if (params[2]?.code) { // 区
        key = 2
      } else if (params[1]?.code) { // 市
        key = 1
      } else if (params[0]?.code) { // 省
        key = 0
      }
      if (key > -1) {
        areaValue.value = params[key]?.code
        const arr = params.splice(0, key + 1)
        const result = filterArea(arr)
        areaText.value = result[1].join('/')
        props.data?.props?.onConfirm?.({ arr, result })
      } else {
        areaValue.value = null
        areaText.value = null
        props.data?.props?.onConfirm?.({})
      }
      emit('update:value', areaValue.value)
      popupVisible.value = false
    }
    const filterArea = (list) => {
      const arr = [[], []]
      list.map(item => {
        arr[0].push(item.code)
        arr[1].push(item.name)
      })
      return arr
    }
    const fieldFn = () => {
      return <Field
        required={props.data?.props?.required || false}
        rules={props.data?.props?.rules}
        name={props.data?.prop}
        v-model={areaText.value}
        label={props.data.label}
        {...props.data.extra?.fieldProps}
        is-link readonly onClickInput={() => { popupVisible.value = true }} />
    }
    const popupFn = () => {
      const areaProps = {
        ...props.data?.props,
        columnsPlaceholder: props.data?.props?.columnsPlaceholder || ['请选择', '请选择', '请选择'],
        onConfirm: areaConfim
      }
      const popupProps = {
        ...props.data.extra?.popupProps,
        position: props.data.extra?.popupProps?.position || 'bottom'
      }
      return <Popup
        v-model:show={popupVisible.value}
        {...popupProps}>
        <Area
          {...areaProps}
          v-slots={props.data?.slots}
          area-list={areaList}
          v-model:value={areaValue.value}
          onCancel={() => { popupVisible.value = false }} />
      </Popup>
    }
    return () => {
      return <div >
        {fieldFn()}
        {popupFn()}
      </div>
    }
  }
}
