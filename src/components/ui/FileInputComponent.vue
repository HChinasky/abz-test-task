<template>
  <div class="upload-control">
    <div
        :class="[
        'file-select',
        { 'has-error': inputError.hasOwnProperty('field') },
      ]"
    >
      <div
          :class="[
          'file-select-button',
          { 'has-error': inputError.hasOwnProperty('field') },
        ]"
          id="fileName"
      >
        Upload
      </div>
      <div class="file-select-name" id="phoneName">Upload your photo</div>
      <Field
          @change="renderNameFiles"
          name="field"
          type="file"
          id="chooseFile"
          placeholder="Upload your photo"
          :rules="validations"
      />
    </div>
    <span class="error-text">{{ inputError.field }}</span>
  </div>
</template>

<script>
import { Field, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

export default {
  name: "FileInputComponent",
  components: {
    Field
  },
  props: {
    inputError: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      validations: {
        image: true,
        dimensions: { width: 70, height: 70 },
        size: 5000,
        ext: ["jpg", "jpeg"],
      },
    };
  },
  methods: {
    renderNameFiles(event) {
      this.$emit("returnFile", event.target.files[0]);
      if (event.target.files.length === 0) {
        document.getElementById("phoneName").innerText = "Upload your photo";
      } else {
        let photoName = event.target.files[0].name.replace(/\.[^/.]+$/, "");
        document.getElementById("phoneName").innerText = photoName;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-control {
  display: block;
  font-size: 16px;
  margin-top: 47px;
  overflow: hidden;
  .file-select {
    display: block;
    border: 1px solid #dce4ec;
    border-radius: 4px;
    color: #34495e;
    cursor: pointer;
    height: 54px;
    line-height: 54px;
    text-align: left;
    position: relative;
    &.has-error {
      border-color: #cb3d40;
    }
    .file-select-name {
      position: absolute;
      color: #7e7e7e;
      display: inline-block;
      padding: 0 16px;
    }
    .file-select-button {
      position: relative;
      left: -1px;
      top: -1px;
      padding: 0 22px;
      display: inline-flex;
      border: 1px solid #000;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      &.has-error {
        border-color: #cb3d40;
      }
    }
    input[type="file"] {
      z-index: 100;
      cursor: pointer;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
  .error-text {
    font-size: 12px;
    line-height: 14px;
    color: #cb3d40;
    padding-left: 15px;
  }
}
</style>
