<template>
  <a :class="['primary__link', linkClass]" :href="link" v-smooth-scroll>{{ title }}</a>
</template>

<script>
export default {
  name: "LinkComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    linkClass: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
  },
}
</script>

<style lang="scss" scoped>
.primary__link {
  display: inline-flex;
  width: 100px;
  background-color: $yellow;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #000;
  padding: 4px 0;
  border-radius: 80px;
  justify-content: center;
  text-decoration: none;
  transition: background-color .3s;
  &:hover {
    background-color: $yellow-hover;
  }
}
</style>
