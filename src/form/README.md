<!--
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/form/README.md
 * @Date: 2022-03-17 11:54:29
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-18 11:52:51
 * @Description:
-->

# Form 表单组件

### 介绍

基于`vant/form`表单组件二次封装，支持输入框、日历选择、地区选择、多选、单选、日期选择、选择器、滑块、步进器、开关、上传、自定义插槽输入类型

## 代码演示

### 基础用法

```html
<cmm-form
  ref="form"
  :data="data"
  :field-schema="fieldSchema"
  label-width="100"
  :show-error="false"
  @change="_handleChange"
  @submit="_onSubmit"
  upload-action="http://10.10.77.194:8092/oamp-store/file/uploadFile"
>
  <template slot="other" slot-scope="{value}">
    我是自定义插槽内容：
    <div>{{ value }}</div>
  </template>

  <van-button class="submit-button" type="info">提交</van-button>
</cmm-form>
```

```javascript
import { reactive, toRefs, h } from 'vue';
import CmmForm from '..';

export default {
  name: 'DemoForm',
  components: {
    CmmForm,
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
        city: 5,
        slotProp: '',
        birthday: '2022-03-16 13:11',
      },
      model: [
        {
          xType: 'field',
          prop: 'name',
          props: {
            placeholder: '请输入姓名',
            rules: [
              {
                required: true,
                message: '请输入姓名',
                trigger: 'onBlur',
              },
            ],
            onClickRightIcon: () => {
              alert('点击了右侧图标');
            },
            rightIcon: 'chat-o',
          },
          slots: {
            label: () => [h('div', '自定义菜单')],
          },
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
            inactiveValue: 0,
          },
          extra: {
            fieldSlots: {
              // extra: () => h('img', { style: 'height:20px', src: 'https://img01.yzcdn.cn/vant/user-active.png' }),
              label: () => 'xxx',
            },
            fieldProps: {
              rightIcon: 'chat-o',
            },
          },
        },
        {
          xType: 'checkboxGroup',
          label: '复选框组',
          prop: 'partInRepeat',
          props: {
            data: [
              {
                name: 'a',
                shape: 'round',
                label: '篮球',
              },
              {
                name: 'b',
                shape: 'square',
                label: '足球',
              },
            ],
          },
          extra: {
            checkboxGroupProps: {
              direction: 'horizontal',
            },
          },
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
                  icon: (props) => getIcon(props),
                },
              },
              {
                name: 2,
                shape: 'square',
                label: '女',
              },
            ],
          },
        },
        {
          xType: 'stepper',
          prop: 'num',
          label: '购买数量',
          props: {
            min: '5',
            max: '8',
            step: '2',
          },
        },
        {
          xType: 'rate',
          prop: 'rate',
          label: '评分',
          props: {
            count: 5,
          },
        },
        {
          xType: 'slider',
          prop: 'score',
          label: '成绩',
          props: {
            max: 10,
            min: 0,
          },
          slots: {
            button: (prop) => getScoreButton(prop),
          },
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
                    alert('点击了自定义菜单');
                  },
                },
                ['自定义菜单']
              ),
          },
          extra: {
            fieldSlots: {
              label: () => 'xxx',
            },
            fieldProps: {
              rightIcon: 'chat-o',
            },
          },
        },
        {
          xType: 'picker',
          prop: 'city',
          label: '城市',
          props: {
            columnsFieldNames: { text: 'label', value: 'value' },
            onConfirm: (param) => {
              console.log(param);
            },
            title: '测试',
            columns: [
              { value: '4', label: '上海' },
              { value: '5', label: '杭州' },
            ],
          },
          extra: {
            fieldProps: {
              placeholder: '请选择城市',
            },
            popupProps: {
              position: 'top',
            },
          },
        },
        {
          xType: 'datetimePicker',
          prop: 'birthday',
          label: '生日',
          props: {
            title: '选择日期',
            type: 'datetime',
            valueFormat: 'yyyy-MM-dd hh:mm',
          },
          extra: {
            fieldProps: {
              placeholder: '请选择城市',
            },
            popupProps: {
              position: 'bottom',
            },
          },
        },
      ],
    });
    const getIcon = ({ checked = true }) => {
      const src = checked
        ? 'https://img01.yzcdn.cn/vant/user-active.png'
        : 'https://img01.yzcdn.cn/vant/user-inactive.png';
      return h('img', {
        style: 'height:20px',
        src,
      });
    };
    const getScoreButton = ({ value }) => h('button', {}, [value]);
    const onSubmit = (values) => {
      console.log(values);
    };
    return {
      ...toRefs(state),
      getIcon,
      getScoreButton,
      onSubmit,
    };
  },
};
```

## API

### Props

支持`vant/form`组件的所有`props`、`event`和`方法`，[点击查看](https://vant-contrib.gitee.io/vant/#/zh-CN/form)

下列列出扩展属性：

| 参数        | 说明         | 类型                    | 默认值 |
| ----------- | ------------ | ----------------------- | ------ |
| data        | 表单预置数据 | _object_                | -      |
| fieldSchema | 表单项配置   | _Array<\_ItemSchema_>\_ | -      |

### ItemSchema Props

| 参数  | 说明                                                                                      | 类型     | 默认值                                         |
| ----- | ----------------------------------------------------------------------------------------- | -------- | ---------------------------------------------- |
| xType | 输入类型，                                                                                | _string_ | -                                              |
| prop  | 绑定的字段名                                                                              | _string_ | -                                              |
| props | 输入类型的属性配置，该数据会透传到对应输入域组件实例中，故参考具体类型的`Props、on`定义， | _object_ | -                                              |
| slots | 输入类型的属性插槽，扩展自对应输入域组件，故参考具体类型的`Slots`定义                     | _object_ | -                                              |
| extra | 额外补充字段，不同类型的输入域会有不同的参数定义，                                        | _object_ | fieldProps、popupProps、popupProps、fieldSlots |

### FORM_FIELD_TYPES 说明

定义了支持的输入类型，目前支持的类型有 `field`、`switch`、`checkbox`、`radio`、`stepper`、`rate`、`slider`、`uploader`、`picker`、`datetimePicker`、`slot`

### extra Props

#### CHECKBOX 属性说明：

| 参数 | 说明                                                                | 类型 | 默认值 |
| ---- | ------------------------------------------------------------------- | ---- | ------ |
| data | 复选框配置项，数据结构同`ItemSchema`中的`props`、`slots` ｜ _Array_ | -    |

#### RADIO 属性说明：

| 参数 | 说明                                                                | 类型 | 默认值 |
| ---- | ------------------------------------------------------------------- | ---- | ------ |
| data | 单选框配置项，数据结构同`ItemSchema`中的`props`、`slots` ｜ _Array_ | -    |

#### CALENDAR 属性说明：

| 参数        | 说明                                         | 类型                                   | 默认值 |
| ----------- | -------------------------------------------- | -------------------------------------- | ------ |
| showFormat  | 用于展示的日期格式化函数                     | _Function< \_string_ \| _string[]_ >\_ | -      |
| valueFormat | 选中的日期格式化，如`yyyy-MM-dd` ｜ _string_ | -                                      |

#### DATETIME_PICKER 属性说明：

| 参数        | 说明                                         | 类型 | 默认值 |
| ----------- | -------------------------------------------- | ---- | ------ |
| valueFormat | 选中的日期格式化，如`yyyy-MM-dd` ｜ _string_ | -    |

### Event

| 名称   | 说明                                                      | 参数                                        |
| ------ | --------------------------------------------------------- | ------------------------------------------- |
| change | 值变更触发的方法，会抛出`prop`、`value`、`formData`三个值 | _{prop:string，value:any，formData:object}_ |

### 方法

支持`vant/form`组件的所有`方法`，[点击查看](https://vant-contrib.gitee.io/vant/#/zh-CN/form)

下列列出扩展属性：

| 名称            | 说明         | 参数     |
| --------------- | ------------ | -------- |
| \_onSubmit      | 获取表单数据 | _object_ |
| resetValidation | 重置表单数据 | -        |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |

### Picker

| 名称              | 说明         | 参数                              |
| ----------------- | ------------ | --------------------------------- |
| columnsFieldNames | 自定义关键字 | { text: 'label', value: 'value' } |
