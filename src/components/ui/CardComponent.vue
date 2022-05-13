<template>
  <div class="card">
    <img :src="avatar" :alt="fullName" class="img-fluid mb-20" />
    <p class="card__text mb-20 mt-0">
      <span :class="['tooltip', { cursorPointer: lengthText(fullName) }]">
        {{ truncateText(fullName) }}
        <span class="tooltiptext" v-if="lengthText(fullName)">
          {{ fullName }}
        </span>
      </span>
    </p>
    <p class="card__text2 text-center">
      <span :class="['tooltip', { cursorPointer: lengthText(position) }]">
        {{ truncateText(position) }}
        <span class="tooltiptext" v-if="lengthText(position)">
          {{ position }}
        </span>
      </span>
      <br />
      <span :class="['tooltip', { cursorPointer: lengthText(email) }]">
        {{ truncateText(email) }}
        <span class="tooltiptext" v-if="lengthText(email)">
          {{ email }}
        </span>
      </span>
      <br />
      <span :class="['tooltip', { cursorPointer: lengthText(phone) }]">
        {{ truncateText(phone) }}
        <span class="tooltiptext" v-if="lengthText(phone)">
          {{ phone }}
        </span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    avatar: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
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
.card {
  height: 245px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 14.5px;
  .img-fluid {
    border-radius: 50%;
  }
  .card__text {
    font-size: 16px;
    line-height: 16px;
  }
  .card__text2 {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
