<template>
  <div class="wrap">
      <h2 class="title2 text-center">Working with POST request</h2>
      <form class="form-wrap">
        <InputTextComponent
            v-model="name"
            name-input="name"
            label="Your name"
        />
        <InputTextComponent
            v-model="email"
            name-input="email"
            label="Email"
        />
        <InputTextComponent
            v-model="phone"
            name-input="phone"
            label="Phone"
        />
        <span class="position-label">Select your position</span>
        <div v-for="pos in positions" :key="pos.id">
          <RadioInputComponent :position="pos" v-model="position" />
        </div>
        <FileInputComponent />
        <div class="btn-wrap">
          <ButtonComponent title="Submit" />
        </div>
      </form>
  </div>
</template>

<script>
import InputTextComponent from "@/components/ui/InputTextComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";
import RadioInputComponent from "@/components/ui/RadioInputComponent";
import FileInputComponent from "@/components/ui/FileInputComponent";

export default {
  name: "SignUpFormComponents",
  components: {
    InputTextComponent,
    ButtonComponent,
    RadioInputComponent,
    FileInputComponent
  },
  setup() {
    const name = "";
    const email = "";
    const phone = "";
    const position = "";

    return {
      name,
      email,
      phone,
      position
    }
  },
  data() {
    return {
      positions: {},
    }
  },
  mounted() {
    const positionApi =
            "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
    this.axios.get(positionApi).then((response) => {
      this.positions = response.data.positions;
    });
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding-bottom: 100px;
  &.saved {
    display: flex;
    flex-direction: column;
    align-items: center;
    .success-img {
      margin-top: 22px;
    }
  }
  .form-wrap {
    width: 100%;
    max-width: 380px;
    margin: auto;
    .position-label {
      display: block;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 11px;
    }
    .btn-wrap {
      display: flex;
      justify-content: center;
      margin-top: 54px;
      .primary__link {
        border: none;
        cursor: pointer;
        &:disabled {
          cursor: not-allowed;
        }
        &:disabled {
          background-color: #b4b4b4;
          color: #fff;
        }
      }
    }
  }
  .text-error {
    font-size: 12px;
    color: #cb3d40;
    text-align: center;
    display: block;
    margin-top: 15px;
  }
}
</style>
