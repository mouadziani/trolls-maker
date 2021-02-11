<template>
  <main class="w-full bg-gray-900">
    <div class="w-full flex justify-between">
      <div class="flex w-2/6 h-screen">
        <button @click="addRect()">add rect</button>
      </div>
      <div class="flex w-4/6 h-screen p-12 bg-gray-300 items-center justify-center">
        <canvas ref="canvas" class="bg-white w-full h-full" width="600" height="400"></canvas>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      newObject: {
        width : 60,
        height : 70,
        fill : 'red'
      }
    }
  },
  methods: {
    addRect() {
      let rect = new fabric.Rect(this.newObject);
      this.canvas.add(rect);
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.$refs.canvas);
  }
}
</script>
