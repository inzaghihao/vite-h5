<template>
  <div class="container">
    <van-button type="primary" @click="show = !show">主要按钮</van-button>
    <div class="box">
      {{ count }}
      <van-popup v-model:show="show">内容</van-popup>
      <van-radio-group v-model="checked">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </div>
    <div class="box1">
      <div>
        <van-rate v-model="value" />
      </div>
      <div class="right">
        <van-share-sheet
          v-model:show="show"
          title="立即分享给好友"
          :options="options"
        />
      </div>
    </div>
  </div>
  <var-button block type="primary">varlet按钮</var-button>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    const show = ref(false)
    const checked = ref('1')
    const add = (num:Number) => {
      store.commit('add', num)
    }
    onMounted(() => {
      add(1)
      console.log(import.meta.env.VITE_APP_URL)
    })
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' }
    ]
    return {
      count: computed(() => store.state.count),
      show,
      checked,
      value: ref(3),
      options
    }
  }
})
</script>
<style scoped lang="scss">
@import './home.scss';
</style>
