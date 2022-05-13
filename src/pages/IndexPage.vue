<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <BannerComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent";
import BannerComponent from "@/components/ui/BannerComponent";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
    BannerComponent
  }
}
</script>
