<template>
  <div class="banner">
    <div class="text-wrap">
      <h1 class="banner__title text-center">
        Test assignment for front-end developer
      </h1>
      <p class="banner__text text-center">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
    </div>
    <LinkComponent title="Sign up"/>
  </div>
</template>

<script>
import LinkComponent from "@/components/ui/LinkComponent";

export default {
  name: "BannerComponent",
  components: {
    LinkComponent
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 650px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
  url("@/assets/banner.jpeg") center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
  .text-wrap {
    max-width: 380px;
  }

  .banner__title {
    font-size: 40px;
    font-weight: 400;
    line-height: 40px;
    color: #fff;
  }

  .banner__text {
    font-size: 16px;
    line-height: 26px;
    color: #fff;
  }
}
</style>
