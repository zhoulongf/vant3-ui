<template>
  <c-swipe
    :list="[demoImg1, demoImg2]"
    model="img"
    @change="onChange"
    @click="itemClick"
  />
</template>

<script>
export default {
  name: 'SwipeDemo'
}
</script>

<script setup>
import CSwipe from '..'
import demoImg1 from './imgs/1.jpg'
import demoImg2 from './imgs/2.jpg'

const onChange = (index) => {
  console.log(index)
}

const itemClick = (e, item, index) => {
  console.log(e, item, index)
}
</script>
