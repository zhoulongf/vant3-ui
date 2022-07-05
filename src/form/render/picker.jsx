/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/render/picker.jsx
 * @Date: 2022-03-17 16:59:13
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 10:57:03
 * @Description:
 */
import { ref } from 'vue'
import { Field, Popup, Picker } from 'vant'
export default {
  name: 'CMPicker',
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
    console.log(props.data)
    const popupVisible = ref(false)
    const currentIndex = ref(0)
    const columnsFieldNames = props.data.props?.columnsFieldNames || { text: 'name', value: 'value' }
    let currentValue = ''
    if (props.data?.currentValue) {
      currentValue = props.data.props?.columns.find((item, index) => {
        currentIndex.value = index
        // eslint-disable-next-line
        return item[columnsFieldNames['value']] == props.data?.currentValue
      })
    }
    const pickerValue = ref(currentValue ? currentValue[columnsFieldNames['text']] : '')
    const pickerConfim = (params) => {
      const { value } = params
      pickerValue.value = value[columnsFieldNames['text']]
      emit('update:value', value[columnsFieldNames['value']])
      popupVisible.value = false
    }
    const fieldFn = () => {
      return <Field
        required={props.data?.props?.required || false}
        rules={props.data?.props?.rules}
        name={props.data?.prop}
        v-model={pickerValue.value}
        label={props.data.label}
        {...props.data.extra?.fieldProps}
        is-link readonly onClickInput={() => { popupVisible.value = true }} />
    }
    const popupFn = () => {
      const pickerProps = {
        ...props.data?.props,
        columnsFieldNames,
        defaultIndex: currentIndex.value
      }
      const popupProps = {
        ...props.data.extra?.popupProps,
        position: props.data.extra?.popupProps?.position || 'bottom'
      }
      return <Popup
        v-model:show={popupVisible.value}
        {...popupProps}>
        <Picker
          {...pickerProps}
          v-slots={props.data?.slots}
          onCancel={() => { popupVisible.value = false }}
          onConfirm={(value, index) => { pickerConfim({ value, index }) }} />
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
