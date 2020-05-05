<template>
  <header class="header">
      <div v-if="left" class="header__left">
        <font-awesome-icon
          class="icon icon-left"
          icon="angle-left"
        ></font-awesome-icon>
      </div>
      <div class="header__center">
        <h3 class="header__title">
          <slot></slot>
        </h3>
      </div>
      <div v-if="right" class="header__right">
        <font-awesome-icon class="icon icon-pen" icon="pen"></font-awesome-icon>
      </div>
    </header>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #212121;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &__center {
    display: flex;
    align-items: flex-end;
    grid-column: 2 / 3;
  }
  &__title {
    color: white;
    font-size: 15px;
    font-family: 'SF Pro Text';
    font-weight: 400;
    margin: 15px auto;
  }
  &__left {
    display: flex;
    align-items: flex-end;
    grid-column: 1 / 2;
  }
  &__right {
    display: flex;
    align-items: flex-end;
    justify-content: right;
    grid-column: 3 / 4;
  }
}
.icon {
  color: #34aa22;
  cursor: pointer;
}
.icon-left {
  font-size: 28px;
  margin-left: 20px;
  margin-bottom: 12px;
}
.icon-pen {
  font-size: 20px;
  margin-left: auto;
  margin-right: 21px;
  margin-bottom: 15px;
}
.sign-up-form {
  padding: 80px 20px 0;
}
</style>