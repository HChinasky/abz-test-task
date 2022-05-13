<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <BannerComponent />
      <div class="card__wrap position-relative">
        <h2 class="title2 text-center">Working with GET request</h2>
        <div class="row">
          <template v-if="isLoading">
            <PreloaderComponent />
          </template>
          <div class="col-4" v-for="user in users" :key="user.id">
            <CardComponent
                :avatar="user.photo"
                :full-name="user.name"
                :position="user.position"
                :email="user.email"
                :phone="user.phone"
            />
          </div>
        </div>
        <ButtonComponent @click.stop.prevent="fetchUsers(nextLink)" title="Show more"/>
      </div>
      <SignUpFormComponents />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent";
import BannerComponent from "@/components/ui/BannerComponent";
import CardComponent from "@/components/ui/CardComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";
import PreloaderComponent from "@/components/ui/PreloaderComponent";
import SignUpFormComponents from "@/components/SignUpFormComponents";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent,
    PreloaderComponent,
    SignUpFormComponents
  },
  data() {
    return {
      users: [],
      nextLink: "",
      isLoading: false
    }
  },
  mounted() {
    let api =
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";
    this.fetchUsers(api);
  },
  methods: {
    fetchUsers(api) {
      this.isLoading = true;
      setTimeout(() => {
        this.axios.get(api).then((response) => {
          this.users = response.data.users;
          this.nextLink = response.data.links.next_url;
          this.isLoading = false;
        });
      }, 2000);
    },
  }
}
</script>
