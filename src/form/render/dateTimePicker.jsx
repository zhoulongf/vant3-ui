/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/render/dateTimePicker.jsx
 * @Date: 2022-03-17 15:48:29
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 10:56:51
 * @Description:
 */
import { isNull, formatDate, momDefaultTime, hourMinute } from '../../utils/utils'
import { TIME_TYPE } from './utils'
import { reactive, toRefs, onMounted } from 'vue'
import { Field, Popup, DatetimePicker } from 'vant'
export default {
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
    const valueFormat = props.data?.props?.valueFormat || null
    const currentValue = props.data?.currentValue || null
    const state = reactive({
      currentValue: null,
      currentDate: null,
      popupVisible: false
    })
    onMounted(() => {
      state.currentValue = isNull(currentValue) ? null : timeFormat(currentValue, valueFormat)
      state.currentDate = defaltFormat(currentValue)
    })
    // 格式化时间类型
    const defaltFormat = (value = null) => {
      const timeType = props.data?.props?.type || 'datetime'
      if (timeType === 'time') {
        return hourMinute()
      }
      // 对年月日小时进行处理
      if (timeType === 'datehour') {
        value = momDefaultTime(value || new Date(), TIME_TYPE['datetime'])
      }
      if (timeType === 'month-day') {
        value = momDefaultTime(value ? new Date().getFullYear() + '-' + value : new Date())
      }
      return isNull(value) ? new Date() : new Date(value)
    }
    // 时间处理
    const timeFormat = (value = null, type) => {
      const timeType = props.data?.props?.type || 'datetime'
      if (timeType === 'time') {
        value = momDefaultTime() + ' ' + value
      }
      return formatDate(value, isNull(type) ? TIME_TYPE[timeType] : type)
    }
    // 提交
    const confirmCallback = (value) => {
      let dealTime = value
      // 判断是否有默认的valueFormat
      dealTime = timeFormat(value, valueFormat)
      state.currentValue = dealTime
      emit('update:value', dealTime)
      props.data?.props?.onConfirm?.(dealTime)
      state.popupVisible = false
    }
    const fieldFn = () => {
      return <Field
        required={props.data?.props?.required || false}
        rules={props.data?.props?.rules}
        name={props.data?.prop}
        v-model={state.currentValue}
        label={props.data.label}
        {...props.data.extra?.fieldProps}
        is-link readonly onClickInput={() => { state.popupVisible = true }} />
    }
    const popupFn = () => {
      const timeProps = {
        ...props.data?.props,
        // 修改默认方法
        onConfirm: confirmCallback
      }
      const popupProps = {
        ...props.data.extra?.popupProps,
        position: props.data.extra?.popupProps?.position || 'bottom'
      }
      return <Popup
        v-model:show={state.popupVisible}
        {...popupProps}>
        <DatetimePicker
          {...timeProps}
          v-model={state.currentDate}
          v-slots={props.data?.slots}
          onCancel={() => { state.popupVisible = false }}
        />
      </Popup>
    }
    return {
      ...toRefs(state),
      fieldFn,
      popupFn,
      timeFormat,
      confirmCallback,
      defaltFormat
    }
  },
  render() {
    return <div>
      {this.fieldFn()}
      {this.popupFn()}
    </div>
  }
}
