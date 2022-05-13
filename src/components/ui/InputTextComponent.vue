<template>
  <div class="form-control" :id="'form-control__' + nameInput">
    <span  :class="['input-label', { 'error-label': error !== '' }]">
      {{ label }}
    </span>
    <input
        v-on="toggleClassListeners"
        @change="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :type="typeInput"
        :name="nameInput"
        :class="['form-input', { 'error-border': error !== '' }]"
    />
    <template v-if="error">
      <span class="error-text">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "InputTextComponent",
  setup(props) {
    const toggleClassListeners = computed(() => {
      return {
        blur: () => {
          if (props.modelValue === "") {
            document
                .getElementById("form-control__" + props.nameInput)
                .classList.remove("focused");
          }
        },
        focus: () => {
          document
              .getElementById("form-control__" + props.nameInput)
              .classList.add("focused");
        },
      };
    });
    return {
      toggleClassListeners,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    nameInput: {
      type: String,
      required: true,
    },
    typeInput: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
      default: "",
    },
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  position: relative;

  &.focused {
    & > .input-label {
      z-index: 101;
      font-size: 12px;
      background-color: #f8f8f8;
      top: -11px;
      transform: none;
      transition: top 0.2s ease, font 0.2s ease;
      &.error-label {
        color: #cb3d40;
      }
    }
  }

  .input-label {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #7f8c8d;
    font-size: 15px;
    line-height: 16px;
    padding: 2px 3px;
    transition: top 0.2s ease, font 0.2s ease;
  }

  .phone-primary {
    font-size: 14px;
    line-height: 14px;
    color: #7e7e7e;
    padding-left: 16px;
    margin-top: 4px;
    position: absolute;
    bottom: -20px;
  }

  .form-input {
    padding: 14px 16px;
    font-size: 16px;
    line-height: 26px;
    background-color: transparent;
    border: 1px solid #d0cfcf;
    border-radius: 4px;
    outline: none;
    z-index: 100;

    &::placeholder {
      color: #7e7e7e;
    }
    &.error-border {
      border-color: #cb3d40;
    }
  }
  .error-text {
    position: absolute;
    bottom: -15px;
    font-size: 12px;
    line-height: 14px;
    color: #cb3d40;
    padding-left: 15px;
    &.has-bottom-label {
      bottom: -35px;
    }
  }
}
</style>
