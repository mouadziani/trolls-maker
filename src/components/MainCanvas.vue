<template>
  <canvas
    ref="canvas"
    width="390"
    height="480"
    class="canvas"
  ></canvas>
</template>

<script>
export default {
  methods: {
    initCanvas() {
      this.$store.commit("initCanvas", this.$refs.canvas);
    },
  },
  mounted() {
    this.initCanvas();
  },
};
</script>

<style scoped>
.canvas {
  box-shadow: 0 0 5px #a5a5a5;
}
</style>