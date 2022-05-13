<template>
  <div class="card">
    <img :src="avatar" :alt="fullName" class="img-fluid mb-20" />
    <p class="card__text mb-20 mt-0">
      <TooltipComponent :text="fullName" />
    </p>
    <p class="card__text2 text-center">
      <TooltipComponent :text="position" />
    </p>
    <p class="card__text2">
      <TooltipComponent :text="email" />
    </p>
    <p class="card__text2">
      <TooltipComponent :text="phone" />
    </p>
  </div>
</template>

<script>
import TooltipComponent from "@/components/ui/TooltipComponent";

export default {
  name: "CardComponent",
  components: {
    TooltipComponent
  },
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
