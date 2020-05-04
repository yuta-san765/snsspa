<template>
  <div class="top">
    <div class="top-image">
        <h1>GEEK</h1>
        <h2>エンジニアのためのSNS</h2>
    </div>
    <div class="top-invitation">
      <BaseButton buttonClass="-fill-green top">メールではじめる</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'Top',
  components: {
    BaseButton
  },
};
</script>

<style lang="scss">
.top {
  height: 100%;
  text-align: center;
}
.top-image {
  background-image: url('../assets/main_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80%;
  display: flex;
  flex-flow: column;
  color: white;
  h1 {
    margin: 205px auto 0;
    font-size: 82px;
  }
  h2 {
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto;
  }
}
</style>
