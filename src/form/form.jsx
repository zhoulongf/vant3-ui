/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/form.jsx
 * @Date: 2022-03-17 11:48:04
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-25 12:04:51
 * @Description:
 */
import { ref } from 'vue'
import UploaderOption from '../uploader'
import {
  Form,
  Button,
  Field,
  Switch,
  CheckboxGroup,
  RadioGroup,
  Checkbox,
  Radio,
  Stepper,
  CellGroup,
  Slider,
  Rate
} from 'vant'
import { DateTime, PickerOption, AreaOption } from './render'
import 'vant/lib/index.css'
export default {
  name,
  props: {
    data: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 表单项配置
    fieldSchema: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(props) {
    const currentData = ref(props.data)
    const renderFn = () =>
      props.fieldSchema.map((item) => {
        const { xType, prop } = item
        let renderItem = null
        let componentFn = null // 不同组件的处理
        switch (xType) {
          case 'field': {
            renderItem = (
              <Field
                name={prop}
                label={item?.props.label}
                {...item.props}
                v-slots={item?.slots}
                v-model={currentData.value[prop]}
              />
            )
            break
          }
          case 'switch': {
            componentFn = () => {
              return <Switch v-model={props.data[prop]} {...item.props} />
              // return (<Field
              //   name={prop}
              //   required={item.required || false}
              //   label={item.label}
              //   v-slots={{
              //     input: () => <Switch v-model={props.data[prop]} {...item.props} />
              //   }}
              // >
              // </Field>)
            }
            break
          }
          case 'checkboxGroup': {
            componentFn = () => {
              const checkboxGroupProps = {
                ...item?.props,
                direction:
                  item?.extra?.checkboxGroupProps?.direction || 'horizontal'
              }
              return (
                <CheckboxGroup
                  v-model={props.data[prop]}
                  {...checkboxGroupProps}
                >
                  {item.props.data.map((subItem) => (
                    <Checkbox v-slots={subItem?.slots} {...subItem}>
                      {subItem.label}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              )
            }
            break
          }
          case 'radio': {
            componentFn = () => {
              const radioGroupProps = {
                ...item.props,
                direction: item?.extra?.radio?.direction || 'horizontal'
              }
              return (
                <RadioGroup v-model={props.data[prop]} {...radioGroupProps}>
                  {item.props.data.map((subItem) => (
                    <Radio v-slots={subItem?.slots} {...subItem}>
                      {subItem.label}
                    </Radio>
                  ))}
                </RadioGroup>
              )
            }
            break
          }
          case 'stepper': {
            componentFn = () => (
              <Stepper v-model={props.data[prop]} {...item.props} />
            )
            break
          }
          case 'uploader': {
            const uploaderProps = {
              props: { ...item.props },
              slots: { ...item.slots },
              formDate: { ...item?.extra?.formDate }
            }
            componentFn = () => (
              <UploaderOption
                v-model:value={props.data[prop]}
                data={uploaderProps}
              />
            )
            break
          }
          case 'rate': {
            componentFn = () => {
              const rateProps = {
                ...item.props,
                allowHalf: item?.props?.allowHalf || true
              }
              return <Rate v-model={props.data[prop]} {...rateProps} />
            }
            break
          }
          case 'slider': {
            componentFn = () => (
              <Slider
                v-model={props.data[prop]}
                {...item.props}
                v-slots={item.slots}
              />
            )
            break
          }
          case 'slot': {
            componentFn = () => (
              <div {...item?.props}>{item.slots.default?.()}</div>
            )
            break
          }
          case 'picker': {
            const data = {
              ...item,
              currentValue: props.data[prop]
            }
            renderItem = (
              <PickerOption v-model:value={props.data[prop]} data={data} />
            )
            break
          }
          case 'datetimePicker': {
            const data = {
              ...item,
              currentValue: props.data[prop]
            }
            renderItem = (
              <DateTime v-model:value={props.data[item.prop]} data={data} />
            )
            break
          }
          case 'area': {
            const data = {
              ...item,
              currentValue: props.data[prop]
            }
            renderItem = (
              <AreaOption v-model:value={props.data[item.prop]} data={data} />
            )
            break
          }
        }
        if (!renderItem) {
          // 相同的逻辑一起处理
          const fieldSlotInfo = {
            input: componentFn,
            ...item.extra?.fieldSlots
          }
          renderItem = (
            <Field
              required={item?.props?.required || false}
              rules={item?.props?.rules}
              name={prop}
              {...item?.extra?.fieldProps}
              label={item.label}
              v-slots={{ ...fieldSlotInfo }}
            />
          )
        }
        return <renderItem />
      })
    return {
      renderFn
    }
  },
  render() {
    return (
      <Form>
        <CellGroup inset={true}>
          {this.renderFn()}
          {this.$slots.default?.()}
        </CellGroup>
        <div style='margin: 16px;'>
          <Button round block type='primary' native-type='submit'>
            提交
          </Button>
        </div>
      </Form>
    )
  }
}
