<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/demo/index.vue
 * @Date: 2022-03-17 11:52:07
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-24 19:00:05
 * @Description:
-->
<script>
import { reactive, toRefs, h } from 'vue'
import CmmForm from '..'

export default {
  name: 'DemoForm',
  components: {
    CmmForm
  },
  setup() {
    const state = reactive({
      data: {
        name: 233,
        partIn: 1,
        partInRepeat: ['b'],
        sex: 1,
        num: 6,
        rate: 3.5,
        score: 4,
        city: '',
        slotProp: '',
        birthday: '2021-02-03 12',
        list: [],
        area: ''
      },
      model: [
        {
          xType: 'field',
          prop: 'name',
          props: {
            placeholder: '请输入姓名',
            required: true,
            rules: [
              {
                required: true,
                message: '请输入姓名'
              }
            ],
            onClickRightIcon: () => {
              alert('点击了右侧图标')
            },
            rightIcon: 'chat-o'
          },
          slots: {
            label: () => [h('div', '自定义菜单')]
          }
        },
        {
          xType: 'switch',
          prop: 'partIn',
          label: '是否参加活动',
          props: {
            size: '20',
            activeColor: '#ee0a24',
            inactiveColor: '#dcdee0',
            activeValue: 1,
            inactiveValue: 0
          },
          extra: {
            fieldSlots: {
              // extra: () => h('img', { style: 'height:20px', src: 'https://img01.yzcdn.cn/vant/user-active.png' }),
              label: () => 'xxx'
            },
            fieldProps: {
              rightIcon: 'chat-o'
            }
          }
        },
        {
          xType: 'checkboxGroup',
          label: '复选框组',
          prop: 'partInRepeat',
          props: {
            required: true,
            rules: [
              {
                required: true,
                message: '请输入姓名'
              }
            ],
            data: [
              {
                name: 'a',
                shape: 'round',
                label: '篮球'
              },
              {
                name: 'b',
                shape: 'square',
                label: '足球'
              }
            ]
          },
          extra: {
            checkboxGroupProps: {
              direction: 'horizontal'
            }
          }
        },
        {
          xType: 'radio',
          prop: 'sex',
          label: '性别',
          props: {
            data: [
              {
                name: 1,
                shape: 'round',
                label: '男',
                slots: {
                  default: () => '篮球',
                  icon: (props) => getIcon(props)
                }
              },
              {
                name: 2,
                shape: 'square',
                label: '女'
              }
            ]
          }
        },
        {
          xType: 'stepper',
          prop: 'num',
          label: '购买数量',
          props: {
            min: '5',
            max: '8',
            step: '2'
          }
        },
        {
          xType: 'rate',
          prop: 'rate',
          label: '评分',
          props: {
            count: 5
          }
        },
        {
          xType: 'slider',
          prop: 'score',
          label: '成绩',
          props: {
            max: 10,
            min: 0
          },
          slots: {
            button: (prop) => getScoreButton(prop)
          }
        },
        {
          xType: 'slot',
          prop: 'slotProp',
          label: '自定义slot',
          slots: {
            default: () =>
              h(
                'div',
                {
                  onClick: () => {
                    alert('点击了自定义菜单')
                  }
                },
                ['自定义菜单']
              )
          },
          extra: {
            fieldSlots: {
              label: () => 'xxx'
            },
            fieldProps: {
              rightIcon: 'chat-o'
            }
          }
        },
        {
          xType: 'picker',
          prop: 'city',
          label: '城市',
          props: {
            required: true,
            rules: [
              {
                required: true,
                message: '请选择城市'
              }
            ],
            columnsFieldNames: { text: 'label', value: 'value' },
            onConfirm: (param) => {
              console.log(param)
            },
            title: '测试',
            columns: [
              { value: '4', label: '上海' },
              { value: '5', label: '杭州' }
            ]
          },
          extra: {
            fieldProps: {
              placeholder: '请选择城市'
            },
            popupProps: {
              position: 'top'
            }
          }
        },
        {
          xType: 'datetimePicker',
          prop: 'birthday',
          label: '生日',
          props: {
            required: true,
            rules: [
              {
                required: true,
                message: '请选择生日'
              }
            ],
            title: '选择日期',
            type: 'datehour',
            onConfirm: (value) => {
              console.log(value)
            }
            // valueFormat: 'yyyy*MM-DD HH'
          },
          extra: {
            fieldProps: {
              placeholder: '请选择城市'
            },
            popupProps: {
              position: 'bottom'
            }
          }
        },
        {
          xType: 'uploader',
          prop: 'list',
          label: '文件上传',
          props: {
            required: true,
            rules: [
              {
                required: true,
                message: '请上传图片'
              }
            ],
            multiple: true,
            afterRead: (value) => {
              console.log(value)
            },
            delete: (value) => {
              console.log(value)
            },
            beforeRead: (value) => {
              console.log(value)
            }
          },
          extra: {
            formDate: {
              formType: {
                userId: 2132
              }
            }
          }
        },
        {
          xType: 'area',
          label: '选择地区',
          prop: 'area',
          props: {
            required: true,
            rules: [
              {
                required: true,
                message: '请选择地区'
              }
            ],
            onConfirm: (value) => {
              console.log(value)
            }
          },
          extra: {
            fieldProps: {
              placeholder: '请选择地区'
            },
            popupProps: {
              position: 'bottom'
            }
          }
        }
      ]
    })
    const getIcon = ({ checked = true }) => {
      const src = checked
        ? 'https://img01.yzcdn.cn/vant/user-active.png'
        : 'https://img01.yzcdn.cn/vant/user-inactive.png'
      return h('img', {
        style: 'height:20px',
        src
      })
    }
    const getScoreButton = ({ value }) => h('button', {}, [value])
    const onSubmit = (values) => {
      console.log(values)
    }
    return {
      ...toRefs(state),
      getIcon,
      getScoreButton,
      onSubmit
    }
  }
}
</script>
<template>
  <div class="container">
    <cmm-form
      :data="data"
      :field-schema="model"
      @submit="onSubmit"
    >
      <template #default>
        <div>我是插槽</div>
      </template>
    </cmm-form>
  </div>
</template>
<style>
.container {
  background-color: #f7f8fa;
  margin-top: 20px;
}
</style>
