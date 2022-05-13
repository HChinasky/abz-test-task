<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <BannerComponent />
      <div class="card__wrap">
        <h2 class="title2 text-center">Working with GET request</h2>
        <div class="row">
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
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent";
import BannerComponent from "@/components/ui/BannerComponent";
import CardComponent from "@/components/ui/CardComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent
  },
  data() {
    return {
      users: [],
      nextLink: ""
    }
  },
  mounted() {
    let api =
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";
    this.fetchUsers(api);
  },
  methods: {
    fetchUsers(api) {
      this.axios.get(api).then((response) => {
        this.users = response.data.users;
        this.nextLink = response.data.links.next_url;
      });
    },
  }
}
</script>
