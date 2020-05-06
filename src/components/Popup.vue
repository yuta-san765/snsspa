<template>
  <div class="popup">
      <div class="icon-wrapper">
        <font-awesome-icon
          @click="$emit('close')"
          icon="times"
          class="icon-times"
        ></font-awesome-icon>
      </div>
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.popup {
  padding: 20px 20px 5px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #707070;
  form {
    text-align: left;
  }
}
.icon-wrapper {
  display: flex;
  margin: 5px auto 17px 10px;
}
.icon-times {
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  color: #707070;
}
</style>