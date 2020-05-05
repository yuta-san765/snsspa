<template>
  <div class="sign-up">
    <div class="header">
      <div class="header__left"></div>
      <div class="header__center">
        <h3 class="header__title">ユーザー登録</h3>
      </div>
      <div class="header__right"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
  height: 80px;
  background-color: #212121;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &__title {
    color: white;
    font-size: 15px;
    font-family: 'SF Pro Text';
    font-weight: 400;
    text-align: center;
    margin-top: 53px;
  }
}
</style>