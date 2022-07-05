/*
 * @Author: zhoulf
 * @FilePath: /mobile-ui/src/list/index.jsx
 * @Date: 2022-03-17 16:44:11
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-03-17 16:52:03
 * @Description:
 */
import { PullRefresh, List, Empty } from 'vant'
import isPromise from 'is-promise'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  props: {
    // 是否自动加载数据
    autoLoad: {
      type: Boolean,
      default: true,
      required: false
    },
    // 获取列表函数
    getList: {
      type: Function,
      default: () => {
      },
      required: true
    },
    // 暂无数据
    emptyText: {
      type: String,
      default: '暂无数据',
      required: false
    },
    // 没有更多的文字提示
    noMoreText: {
      type: String,
      default: '没有更多了',
      required: false
    },
    // 列表数据错误状态文字提示
    errorText: {
      type: String,
      default: '请求失败，点击重新加载',
      required: false
    }
  },
  setup(props) {
    const state = reactive({
      // 是否在刷新
      refreshing: false,
      // 列表是否刷新中
      loading: false,
      // 数据是否已经加载全部
      finished: false,
      // 列表底部没有数据时的提示语句
      finishedText: props.noMoreText,
      // 列表数据错误状态
      error: false,
      // 当前在第几页
      pageIndex: 1,
      // 分页大小
      pageSize: 10,
      // 数据总条数
      count: 0,
      // 数据列表
      list: [],
      // 是否是空数据
      isEmpty: false

    })
    // 内部处理加载数据
    function handleListLoad() {
      const { pageIndex, pageSize } = state
      const rs = props.getList({ pageIndex, pageSize })
      if (isPromise(rs)) {
        rs.then(res => {
          const { list, count } = res
          // 如果当前是下拉过程中，立即结束，并清空当前的列表数据
          if (state.refreshing) {
            state.list = []
            state.refreshing = false
          }

          if (count <= 0) {
            // 空数据
            state.finished = true
            state.finishedText = props.emptyText
            state.isEmpty = true
          } else {
            state.isEmpty = false
            state.finishedText = props.noMoreText
            if (list && list.length > 0) {
              if (pageIndex === 1) {
                // 第一页
                state.list = list
              } else {
                // 非第一页，数据往后追加
                state.list = state.list.concat(list)
              }

              if (state.pageSize * state.pageIndex >= count) {
                // 已经是最后一页
                state.finished = true
              } else {
                state.pageIndex++
              }
            } else {
              // 当前页数据为空
              state.finished = true
            }
          }
        }).catch(() => {
          state.error = true
        }).finally(() => {
          state.loading = false
        })
      }
    }
    // 内部处理下拉刷新
    function handleRefresh() {
      // 错误状态重置
      state.error = false
      // 数据加载中，立即重置刷新状态为false
      if (state.loading) {
        state.refreshing = false
      } else {
        state.finished = false
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        state.loading = true
        state.pageIndex = 1
        handleListLoad()
      }
    }
    function resetPage() {
      handleRefresh()
    }
    return {
      ...toRefs(state),
      handleRefresh,
      handleListLoad,
      resetPage
    }
  },
  render() {
    const { autoLoad, errorText, emptyText } = this.$.props
    const { finished, finishedText, isEmpty } = this
    return (
      <PullRefresh vModel={this.refreshing} onRefresh={this.handleRefresh}>
        {isEmpty ? this.$slots.empty ? this.$slots.empty : <Empty description={emptyText}></Empty>
          : <List vModel={this.loading} immediateCheck={autoLoad} finished={finished}
            finishedText={finishedText} error={this.error} errorText={errorText}
            {...{
              on: {
                'update:error': () => {
                  this.error = false
                }
              }
            }}
            onLoad={this.handleListLoad}>
            {this.$slots.list && this.$slots.list({ list: this.list })}
          </List>}
      </PullRefresh>
    )
  }
})
