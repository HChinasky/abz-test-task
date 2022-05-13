<template>
  <button :class="['primary__button', linkClass]">{{ title }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    linkClass: {
      type: String,
      default: "",
    }
  }
}
</script>

<style lang="scss" scoped>
.primary__button {
  display: inline-flex;
  width: 120px;
  background-color: $yellow;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #000;
  padding: 4px 0;
  border: none;
  border-radius: 80px;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .3s;
  &:hover {
    background-color: #FFE302;
  }
  &:disabled {
    background-color: #b4b4b4;
    color: #fff;
  }
}
</style>
