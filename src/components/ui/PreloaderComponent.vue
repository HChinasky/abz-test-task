<template>
  <div class="preloader__wrap">
    <svg
        class="preloader-circle"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle
          class="path"
          fill="none"
          stroke-width="5"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "PreloaderComponent"
}
</script>

<style lang="scss" scoped>
.preloader__wrap {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
  .preloader-circle {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 50%;
    left: 50%;
    transform: rotate(-90deg);
    animation: rotate-first 2s ease-in-out infinite;
    .path {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      transform-origin: center;
      stroke: #00bdd3;
      animation: dash-first 2s ease-in-out infinite;
    }
  }
}

@keyframes dash-first {
  0% {
    stroke-dashoffset: 300;
  }
  50% {
    stroke-dashoffset: 187.5;
    // transform: rotate(130deg);
  }
  75% {
    stroke-dashoffset: 187.5;
    transform: rotate(130deg);
  }
  100% {
    stroke-dashoffset: 300;
    transform: rotate(360deg);
  }
}
@keyframes rotate-first {
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
</style>
