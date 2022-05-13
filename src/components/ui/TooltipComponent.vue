<template>
  <span :class="['tooltip', { cursorPointer: lengthText(text) }]">
    {{ truncateText(text) }}
    <span class="tooltiptext" v-if="lengthText(text)">
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  name: "TooltipComponent",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    lengthText(text) {
      let length = 40;
      return text && text.length > length;
    },
    truncateText(text) {
      let size = 37;
      if (text) {
        return text.length > size ? text.slice(0, size - 1) + "..." : text;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  &:hover {
    .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
  &.cursorPointer {
    cursor: pointer;
  }
  .tooltiptext {
    max-width: 400px;
    width: 100%;
    visibility: hidden;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 3px 16px;
    border-radius: 6px;
    white-space: normal;
    word-break: break-all;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
}
</style>
