<template>
  <div class="header">
    <div class="container">
      <div class="logo-block">
        <img class="img-fluid" src="@/assets/Logo.svg" alt="logo" width="104" height="26" />
      </div>
      <div class="buttons-block">
        <LinkComponent link-class="mr-10" title="Users" link="#users" />
        <LinkComponent title="Sign up" link="#sign-up" />
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
