<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{label}}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" class="input" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
};
</script>

<style lang="scss">
.input-label {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
}
.input-wrapper {
  margin-bottom: 18px;
}
.input {
  width: calc(100% - 10px);
  height: 54px;
  padding-left: 10px;
  border-radius: 15px;
  border: 1px solid #707070;
  &:focus {
    outline: 0;
    border: 1px solid white !important;
    box-shadow: 0 0 5px rgba($color: #34aa22, $alpha: 1);
  }
}
::placeholder {
  color: #000000;
  opacity: 0.3;
}
</style>
