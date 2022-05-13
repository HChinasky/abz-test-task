<template>
  <div class="radio-control">
    <input
        type="radio"
        :id="'contactChoice' + position.id"
        @change="$emit('update:modelValue', $event.target.value)"
        name="position"
        :value="position.id"
    />
    <label :for="'contactChoice' + position.id">
      {{ position.name }}
    </label>
    <div class="check"></div>
  </div>
</template>

<script>
export default {
  name: "RadioInputComponent",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    position: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-control {
  font-size: 16px;
  color: #000;
  position: relative;
  margin-bottom: 7px;
  label {
    position: relative;
    padding-left: 30px;
    z-index: 100;
  }
  .check {
    display: block;
    position: absolute;
    border: 1px solid #d0cfcf;
    border-radius: 100%;
    height: 18px;
    width: 18px;
    top: 0px;
    left: 0px;
    z-index: 5;
    transition: border 0.25s linear;
    &:before {
      display: block;
      position: absolute;
      content: "";
      border-radius: 100%;
      height: 10px;
      width: 10px;
      top: 4px;
      left: 4px;
      margin: auto;
      transition: background 0.25s linear;
    }
  }
  input[type="radio"] {
    position: absolute;
    visibility: hidden;
    &:checked {
      ~ .check {
        border: 1px solid #00bdd3;
        &:before {
          background: #00bdd3;
        }
      }
    }
  }
}
</style>
