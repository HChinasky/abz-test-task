<template>
  <div :class="['wrap', { saved: savingSuccessful }]">
    <template v-if="!savingSuccessful">
      <h2 class="title2 text-center">Working with POST request</h2>
      <Form
          v-slot="{ errors }"
          class="form-wrap"
          @submit="onSubmit"
      >
        <InputTextComponent
            v-model="name"
            name-input="name"
            label="Your name"
            :error="nameError"
        />
        <InputTextComponent
            v-model="email"
            name-input="email"
            label="Email"
            :error="emailError"
        />
        <InputTextComponent
            v-model="phone"
            name-input="phone"
            label="Phone"
            :error="phoneError"
            show-bottom-label="+38 (XXX) XXX - XX - XX"
        />
        <span class="position-label">Select your position</span>
        <div v-for="pos in positions" :key="pos.id">
          <RadioInputComponent :position="pos" v-model="position" />
        </div>
        <FileInputComponent
            @return-file="acceptedFile"
            :inputError="errors"/>
        <div class="btn-wrap">
          <ButtonComponent
            title="Submit"
            :disabled="!meta.valid || Object.keys(errors).length !== 0 || !file" />
        </div>
        <span class="text-error" id="back-error"></span>
      </Form>
    </template>
    <template v-else>
      <h2 class="title2 text-center">User successfully registered</h2>
      <div class="success-img">
        <img src="@/assets/success-image.svg" alt="success register" />
      </div>
    </template>
  </div>
</template>

<script>
import { Form, useForm, useField } from "vee-validate";
import * as yup from "yup";
import InputTextComponent from "@/components/ui/InputTextComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";
import RadioInputComponent from "@/components/ui/RadioInputComponent";
import FileInputComponent from "@/components/ui/FileInputComponent";

export default {
  name: "SignUpFormComponents",
  setup() {
    const schema = yup.object({
      name: yup.string().required().min(2).max(60),
      email: yup.string().email().required().min(2).max(100),
      phone: yup.string().required().min(19).max(19),
      position: yup.number().required(),
    });
    const { meta } = useForm({
      validationSchema: schema,
    });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const { value: position, errorMessage: positionError } =
        useField("position");

    return {
      meta,
      name,
      nameError,
      email,
      emailError,
      phone,
      phoneError,
      position,
      positionError,
      schema,
    };
  },
  components: {
    InputTextComponent,
    ButtonComponent,
    RadioInputComponent,
    FileInputComponent,
    Form
  },
  data() {
    return {
      positions: {},
      token: "",
      file: false,
      savingSuccessful: false,
    }
  },
  mounted() {
    const positionApi =
            "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
        tokenApi = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
    this.axios.get(positionApi).then((response) => {
      this.positions = response.data.positions;
    });
    this.axios.get(tokenApi).then((response) => {
      this.token = response.data.token;
    });
  },
  methods: {
    onSubmit() {
      let user = new FormData();
      user.append("name", this.name);
      user.append("email", this.email);
      user.append("phone", this.phone.replace(/[^+\d]+/g, ""));
      user.append("position_id", +this.position);
      user.append("photo", this.file);

      const userAddApi =
              "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          headers = {
            Token: this.token,
            "Content-Type": "multipart/form-data",
          };

      this.axios
          .post(userAddApi, user, { headers })
          .then((response) => {
            if (response.data.success) {
              this.$emit("updateGet", true);
              this.savingSuccessful = true;
            } else {
              document.getElementById("back-error").innerText =
                  response.data.message;
            }
          })
          .catch((err) => {
            document.getElementById("back-error").innerText =
                err.response.data.message;
          });
    },
    acceptedFile(event) {
      this.file = event ? event : false;
    },
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
