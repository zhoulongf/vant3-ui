import { computed, toRefs } from 'vue'

import { Swipe, SwipeItem } from 'vant'

import 'vant/lib/index.css'

import { getType } from '../utils/utils'

export default {
  name: 'CSwipe',

  props: {
    // 图片列表
    list: {
      type: [String, Array],
      required: true,
      default: () => []
    },

    // 模式，是否为图片显示模式
    model: {
      type: String,
      required: false,
      default: () => 'img'
    },

    // 分割符
    separator: {
      type: String,
      required: false,
      default: () => ','
    },

    // vant默认的其他配置
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },

  emits: ['change', 'click'],

  setup(props, { emit, slots }) {
    const renderList = computed(() => {
      // 图片列表不存在，直接返回空数组
      if (!props.list) return []

      // 根据分隔符分割，或者直接返回
      return getType(props.list) === 'String' ? props.list.split(props.separator).filter(i => i) : props.list
    })

    // 触发翻页事件
    const swipeChange = (index) => {
      emit('change', index)
    }

    // 触发点击事件
    const itemClick = (item, index, e) => {
      emit('click', e, item, index)
    }

    // 渲染文本
    const renderText = (item) => {
      return slots.default
        ? slots.default()
        : <>{item}</>
    }

    const renderImg = (item, index) => {
      return slots.default
        ? slots.default()
        : <img src={item} alt={item + index}/>
    }

    return {
      ...toRefs(props),
      renderList,
      slots,
      swipeChange,
      itemClick,
      renderText,
      renderImg
    }
  },
  render() {
    return <Swipe {...this.options} onChange={this.swipeChange}>
      {
        this.renderList.map((item, index) => (
          <SwipeItem key={item} onClick={() => this.itemClick(item, index, event)}>
            {
              this.model === 'text'
                ? this.renderText(item, index)
                : this.renderImg(item, index)
            }
          </SwipeItem>
        ))
      }
      {this.slots.indicator?.()}
    </Swipe>
  }
}
