<template>
  <div class="header">
    <div class="container">
      <div class="logo-block">
        <img class="img-fluid" src="@/assets/Logo.svg" alt="logo" />
      </div>
      <div class="buttons-block">
        <LinkComponent link-class="mr-10" title="Users" />
        <LinkComponent link-class="mr-10" title="Sign up" />
      </div>
    </div>
  </div>
</template>
<script>
import LinkComponent from "@/components/ui/LinkComponent";

export default {
  name: "HeaderComponent",
  components: {
    LinkComponent,
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  .container {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
